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
        // 設置存檔2的遊戲狀態
        DataManager.loadGame(2);
        // 跳轉到地圖畫面
        SceneManager.goto(Scene_Map);
    }
    this.updateDocumentTitle();
};