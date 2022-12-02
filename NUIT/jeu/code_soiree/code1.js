gdjs.OutroCode = {};
gdjs.OutroCode.GDIelObjects1= [];
gdjs.OutroCode.GDIelObjects2= [];
gdjs.OutroCode.GDBackObjects1= [];
gdjs.OutroCode.GDBackObjects2= [];
gdjs.OutroCode.GDNewSpriteObjects1= [];
gdjs.OutroCode.GDNewSpriteObjects2= [];
gdjs.OutroCode.GDNewTextObjects1= [];
gdjs.OutroCode.GDNewTextObjects2= [];
gdjs.OutroCode.GDcontinueObjects1= [];
gdjs.OutroCode.GDcontinueObjects2= [];

gdjs.OutroCode.conditionTrue_0 = {val:false};
gdjs.OutroCode.condition0IsTrue_0 = {val:false};
gdjs.OutroCode.condition1IsTrue_0 = {val:false};
gdjs.OutroCode.condition2IsTrue_0 = {val:false};
gdjs.OutroCode.condition3IsTrue_0 = {val:false};


gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDcontinueObjects1Objects = Hashtable.newFrom({"continue": gdjs.OutroCode.GDcontinueObjects1});
gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDcontinueObjects1Objects = Hashtable.newFrom({"continue": gdjs.OutroCode.GDcontinueObjects1});
gdjs.OutroCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("continue"), gdjs.OutroCode.GDcontinueObjects1);

gdjs.OutroCode.condition0IsTrue_0.val = false;
gdjs.OutroCode.condition1IsTrue_0.val = false;
gdjs.OutroCode.condition2IsTrue_0.val = false;
{
gdjs.OutroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDcontinueObjects1Objects, runtimeScene, true, false);
}if ( gdjs.OutroCode.condition0IsTrue_0.val ) {
{
gdjs.OutroCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OutroCode.mapOfGDgdjs_46OutroCode_46GDcontinueObjects1Objects, runtimeScene, true, false);
}if ( gdjs.OutroCode.condition1IsTrue_0.val ) {
{
gdjs.OutroCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
if (gdjs.OutroCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.OutroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OutroCode.GDIelObjects1.length = 0;
gdjs.OutroCode.GDIelObjects2.length = 0;
gdjs.OutroCode.GDBackObjects1.length = 0;
gdjs.OutroCode.GDBackObjects2.length = 0;
gdjs.OutroCode.GDNewSpriteObjects1.length = 0;
gdjs.OutroCode.GDNewSpriteObjects2.length = 0;
gdjs.OutroCode.GDNewTextObjects1.length = 0;
gdjs.OutroCode.GDNewTextObjects2.length = 0;
gdjs.OutroCode.GDcontinueObjects1.length = 0;
gdjs.OutroCode.GDcontinueObjects2.length = 0;

gdjs.OutroCode.eventsList0(runtimeScene);

return;

}

gdjs['OutroCode'] = gdjs.OutroCode;
