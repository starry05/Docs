import React from "react";
//import html2pdf from "html2pdf.js";

export default function DownloadPdfButton() {
//   const handleDownload = () => {
//     // 1. 隐藏所有浮动按钮（带 .float-btn 类名）
//     const floatButtons = document.querySelectorAll(".float-btn");
//     floatButtons.forEach(btn => (btn.style.display = "none"));
    
//     // 2. 设置字体大小
//     document.body.style.fontSize = "12px";

//     // 3. 获取主内容区域
//     const content = document.querySelector(".container.padding-top--md.padding-bottom--lg");
//     if (!content) {
//       alert("未找到内容区域");
//       floatButtons.forEach(btn => (btn.style.display = ""));
//       return;
//     }
//     content.style.width = "996px";
//     content.style.maxWidth = "unset";
//     content.setAttribute("data-pdf-widened", "true");
//     //content.style.width = "1000px";
//     //document.body.clientWidth = "750px";
//     //content.style.maxWidth = "unset";
//     // const containerWidth = document.body.clientWidth;
//     // document.querySelectorAll("pre").forEach(pre => {
//     //   const preWidth = pre.scrollWidth;
//     //   if (preWidth > containerWidth) {
//     //     const scale = containerWidth / preWidth;
//     //     pre.style.transform = `scale(${scale})`;
//     //     pre.style.transformOrigin = "left top";
//     //     pre.style.marginBottom = "1rem";
//     //   }
//     // });
    
// // document.querySelectorAll("table").forEach(table => {
// //   const fullWidth = table.scrollWidth;

// //   if (fullWidth > containerWidth) {
// //     table.style.width = "100%";
// //     table.style.maxWidth = "100%";
// //     table.style.tableLayout = "fixed";
// //     table.setAttribute("data-pdf-table-scaled", "true");

// //     // 自动处理单元格过长内容
// //     table.querySelectorAll("td, th").forEach(cell => {
// //       cell.style.wordBreak = "break-word";
// //       cell.style.overflowWrap = "break-word";
// //     });
// //   }
// // });
//     // document.querySelectorAll("table").forEach(table => {
//     //   const tableWidth = table.scrollWidth;
//     //   if (tableWidth > containerWidth) {
//     //     const scale = containerWidth / preWidth;
//     //     table.style.transform = `scale(${scale})`;
        
//     //     table.style.transformOrigin = "left top";
//     //     el.setAttribute("data-pdf-scaled", "true");
//     //     pre.style.marginBottom = "1rem";
//     //   }
//     // });

//     // 5. 避免分页断表格、段落
//     const safeElements = document.querySelectorAll(
//       "tr, td, th, p, h1, h2, h3, h4, blockquote,pre,table"
//     );
//     safeElements.forEach(el => {
//       el.style.breakInside = "avoid";
//       el.style.pageBreakInside = "avoid";
//     });
//     const title = document.title || "document";
//     // 6. 导出 PDF
//     html2pdf()
//       .set({
//         margin: 0.5,
//         filename: `${title}.pdf`,
//         html2canvas: { scale: 2 ,
//           scrollX: 0,
//           scrollY: 0,
//           windowWidth: 996, 
//         },
//         jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
//       })
//       .from(content)
//       .save()
//       .then(() => {
//         // 7. 还原页面样式
//         // floatButtons.forEach(btn => (btn.style.display = ""));
//         // document.body.style.fontSize = "";
//         // safeElements.forEach(el => {
//         //   el.style.breakInside = "";
//         //   el.style.pageBreakInside = "";
//         // });
//         // document.querySelectorAll('[data-pdf-scaled="true"]').forEach(el => {
//         //   el.style.transform = "";
//         //   el.style.transformOrigin = "";
//         //   el.style.marginBottom = "";
//         //   el.removeAttribute("data-pdf-scaled");
//         // });
//             const content = document.querySelector('[data-pdf-widened="true"]');
//     if (content) {
//       content.style.width = "";
//       content.style.maxWidth = "";
//       content.removeAttribute("data-pdf-widened");
//     }
//       });
//   };
  const handlePrint = () => {
    window.print(); // 使用原生浏览器打印
  };
  return (
    <div className="float-btn-container download-pdf-btn">
      <button
        title="下载 PDF"
        className="float-btn"
        onClick={handlePrint}
      >
        🖨️
      </button>
    </div>
  );
}
