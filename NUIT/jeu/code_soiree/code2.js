gdjs.IntroCode = {};
gdjs.IntroCode.GDIelObjects1= [];
gdjs.IntroCode.GDIelObjects2= [];
gdjs.IntroCode.GDBackObjects1= [];
gdjs.IntroCode.GDBackObjects2= [];
gdjs.IntroCode.GDNewSpriteObjects1= [];
gdjs.IntroCode.GDNewSpriteObjects2= [];
gdjs.IntroCode.GDNewTextObjects1= [];
gdjs.IntroCode.GDNewTextObjects2= [];
gdjs.IntroCode.GDcontinueObjects1= [];
gdjs.IntroCode.GDcontinueObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};
gdjs.IntroCode.condition2IsTrue_0 = {val:false};
gdjs.IntroCode.condition3IsTrue_0 = {val:false};


gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDcontinueObjects1Objects = Hashtable.newFrom({"continue": gdjs.IntroCode.GDcontinueObjects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDcontinueObjects1Objects = Hashtable.newFrom({"continue": gdjs.IntroCode.GDcontinueObjects1});
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("continue"), gdjs.IntroCode.GDcontinueObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
gdjs.IntroCode.condition2IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDcontinueObjects1Objects, runtimeScene, true, false);
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDcontinueObjects1Objects, runtimeScene, true, false);
}if ( gdjs.IntroCode.condition1IsTrue_0.val ) {
{
gdjs.IntroCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
if (gdjs.IntroCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDIelObjects1.length = 0;
gdjs.IntroCode.GDIelObjects2.length = 0;
gdjs.IntroCode.GDBackObjects1.length = 0;
gdjs.IntroCode.GDBackObjects2.length = 0;
gdjs.IntroCode.GDNewSpriteObjects1.length = 0;
gdjs.IntroCode.GDNewSpriteObjects2.length = 0;
gdjs.IntroCode.GDNewTextObjects1.length = 0;
gdjs.IntroCode.GDNewTextObjects2.length = 0;
gdjs.IntroCode.GDcontinueObjects1.length = 0;
gdjs.IntroCode.GDcontinueObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
