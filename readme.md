# Web Speech APIを利用した、音声認識ソフトウェア

## about
Google ChromeのwebkitSpeechRecognitionを利用して発話を認識し、結果を[棒読みちゃん](https://chi.usamimi.info/Program/Application/BouyomiChan/)に入力し喋らせます。

## how to use
### ver.http
1. [棒読みちゃん](https://chi.usamimi.info/Program/Application/BouyomiChan/)をダウンロードし、解凍
2. 棒読みちゃんを起動後、基本設定→システム→アプリケーション連携を開き、「ローカルHTTPサーバ機能を使う」をTrue、「ポート番号」を50080に設定し、棒読みちゃんを再起動する
3. 
    1. node.jsが入っている場合は、index.jsが入っているディレクトリで、「node index.js (もしくはnpm run start)」をコマンドプロンプト、またはパワーシェルで実行
    2. node.jsが入っていない場合は、app.exeを実行
4. 「server is working at localhost:8000」と表示されることを確認する
5. Google Chromeで[「localhost:8000」](http://localhost:8000)にアクセスし、マイクの権限を許可する
6. 話す
7. 終了する際には、プロンプトで「ctrl+c」を押し、プログラムを停止させる。

### ver.socket
1. [棒読みちゃん](https://chi.usamimi.info/Program/Application/BouyomiChan/)をダウンロードし、解凍
2. 棒読みちゃんを起動後、基本設定→システム→アプリケーション連携を開き、「ローカルTCPサーバ機能を使う」をTrue、「ポート番号」を50001に設定し、棒読みちゃんを再起動する
3. 
    1. node.jsが入っている場合は、index.jsが入っているディレクトリで、「node index.js (もしくはnpm run start)」をコマンドプロンプト、またはパワーシェルで実行
    2. node.jsが入っていない場合は、app.exeを実行
4. 「server is working at localhost:8000」と表示されることを確認する
5. Google Chromeで[「localhost:8000」](http://localhost:8000)にアクセスし、マイクの権限を許可する
6. 話す
7. 終了する際には、プロンプトで「ctrl+c」を押し、プログラムを停止させる。

### ver.PWA
https://chrome2bouyomichan.tk/
