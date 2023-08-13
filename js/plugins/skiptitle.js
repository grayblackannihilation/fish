// 跳過遊戲開頭直接進入存檔1的腳本

// 在遊戲加載完成後立即運行的代碼
Scene_Boot.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    SoundManager.preloadImportantSounds();
    if (DataManager.isBattleTest()) {
        DataManager.setupBattleTest();
        SceneManager.goto(Scene_Battle);
    } else if (DataManager.isEventTest()) {
        DataManager.setupEventTest();
        SceneManager.goto(Scene_Map);
    } else {
        this.checkPlayerLocation();
        DataManager.setupNewGame();
        // 設置存檔1的遊戲狀態
        DataManager.loadGame(1);
        // 跳轉到地圖畫面
        SceneManager.goto(Scene_Map);
    }
    this.updateDocumentTitle();
};