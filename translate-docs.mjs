import 'dotenv/config';
import { OpenAI } from 'openai';
import {glob} from 'glob';
import fs from 'fs-extra';
import path from 'path';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function translateWithGPT(text) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4', // 或 gpt-3.5-turbo
    messages: [
      {
        role: 'system',
        content: 'You are a professional English translator. Translate the following Markdown text into fluent English. Preserve all Markdown formatting such as headings, links, code blocks, and tables.',
      },
      {
        role: 'user',
        content: text,
      },
    ],
    temperature: 0.2,
  });

  return response.choices[0].message.content;
}

async function translateMarkdownFile(srcPath, destPath) {
  const content = await fs.readFile(srcPath, 'utf8');
  const translated = await translateWithGPT(content);
  await fs.outputFile(destPath, translated, 'utf8');
  console.log(`✅ Translated: ${srcPath} → ${destPath}`);
}

async function runBatchTranslation() {
  const files = glob.sync('docs/**/*.{md,mdx}');

  for (const srcPath of files) {
    const relativePath = path.relative('docs', srcPath);
    const destPath = path.join('i18n/en/docusaurus-plugin-content-docs/current', relativePath);
    await translateMarkdownFile(srcPath, destPath);
    await new Promise(resolve => setTimeout(resolve, 2000)); // 加 2 秒间隔防止频繁请求
  }

  console.log('🎉 All files translated.');
}

runBatchTranslation();
