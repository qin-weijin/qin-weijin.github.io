## 属性

- `autoplay<boolean | string>` - 自动播放

	+ 	'muted' - 静音
	+ 	'play' - 播放
	+ 	'any' - 静音播放

- `height<string | number>` - 播放器高度

- `width<string | number>` - 播放器宽度

- `src<string>` - 视频源 URL

- `poster<string>` - 海报 URL

- `controls<boolean>` - 显示控制面板

- `loop<boolean>` - 循环播放

- `muted<boolean>` - 静音

- `preload<string>`

	+ 	`auto` - 立即加载
	+ 	`metadata` - 仅加载元数据包括持续时间、尺寸等
	+ 	`none` - 不加载任何数据

- `crossorigin<anoymous | use-credentials>` - 指明是否使用 CORS 跨域共享资源来获取视频。

- `playsinline<boolean>` - 指明视频内联播放

## 事件

canplay - 文件可以开始播放，但评估可能需要暂停等待缓冲时触发

canplaythrough - 评估无需暂停等待缓冲时触发

complete - `OfflineAudioContext` 渲染完成

durationchange - `duration` 持续时间改变时触发

emptied - 媒体内容变为空

ended - 播放完成，视频已停止

waiting - 	由于暂时缺少数据，播放已停止

pause - 播放已暂停

play - 播放已开始

playing - 缺乏数据被暂停，准备开始时

progress - 加载资源时周期性触发

ratechange - 播放速率改变时

seeked - 跳帧（seek）操作完成。

seeking - 跳帧（seek）操作开始

stalled - 用户代理（user agent）正在尝试获取媒体数据, 但数据意外未出现。

suspend - 媒体数据加载已暂停

timeupdate - currentTime 属性指定的时间发生变化

loadeddata - media 首帧加载完成

loadedmetadata - 元数据加载完成

volumechange - 音量变化时

