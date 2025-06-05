---
id: intro
slug: /
---

# Rokae Robot

## 术语表
| 名词 | 解释 |
| --- | --- |
| RobotAssist  | 珞石机器人 xCore 控制系统的上位机软件，具有机器人移动控制、程序编写、参数配置、状态监控等功能，可以运行于 xPad2 示教器、PC 等设备上。 |
| HMI  | Human Machine Interface，人机交互界面。 |
| HMID  | HMI Device，人机交互设备。 |
| RC  | Robot Controller，机器人控制器。 |
| RCI  | Rokae Control Interface，珞石机器人外部控制接口，支持底层实时控制。 |
| SDK  | Software  Development  Kit ，软件开发工具包，支持通过 C++ 等语言实现对机器人的底层控制，后续将逐步取代 RCI 。 |
| Project  | 工程，控制机器人运行的程序、任务等对象的管理集合；工程的数据对象可以导出，在其他工程或机器人复用。 |
| Task  | 在 xCore 中我们称为任务。 |
| Module  | 在 xCore  中我们称为程序模块。 |
| Elbow  | 臂角，指的是臂平面与参考平面之间的夹角，臂平面指的是机器人大臂与小臂所组成的平面，参考平面是指，三轴为零时末端达到同样位姿时所形成的臂平面。 |
| RL  | Rokae  Robot  Language ，珞石机器人语言，包含丰富的指令，可以基于RL 搭建机器人任务。 |
| xPad2  | 示教器。 |
| RSC  | Robot Safety Controller，安全控制器。 |
| JOG  | 点动。 |
| 零空间运动 | 对于冗余自由度机器人，可以通过零空间运动，实现机器人关节运动但末端静止的效果。 |
| PERS 变量 | 持续性变量，在程序执行过程中如果此类型变量的值发生了变化，将会自动将该变量的初始值修改为当前值，由此达到“持续”存储的效果。 |


