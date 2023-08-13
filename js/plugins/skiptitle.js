//=============================================================================
// 跳過標題.js
//=============================================================================

/*:
 * @plugindesc Skip Title.
 * @author taroxd
 *
 * @param Test Only
 * @desc Whether to skip title only in playtest. true/false
 * @type boolean
 * @default true
 *
 * @help This plugin does not provide plugin commands. RPG Maker MZ is not supported.
 */

void function() {

    var parameters = PluginManager.parameters('SkipTitle');
    var testOnly = parameters['Test Only'] !== 'false';
    var enable = !testOnly || Utils.isOptionValid("test");

    if (enable) {
        Scene_Boot.prototype.start = function() {
            Scene_Base.prototype.start.call(this);
            this.checkPlayerLocation();
            
            // 檢查存檔2是否存在
            if (DataManager.isThisGameFile(2)) {
                // 載入存檔2的遊戲狀態
                DataManager.loadGame(2);
            } else {
                // 開始新遊戲
                DataManager.setupNewGame();
            }
            
            SceneManager.goto(Scene_Map);
        };
    }
}();