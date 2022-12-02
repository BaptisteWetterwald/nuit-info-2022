gdjs.GameCode = {};
gdjs.GameCode.GDIelObjects1= [];
gdjs.GameCode.GDIelObjects2= [];
gdjs.GameCode.GDIelObjects3= [];
gdjs.GameCode.GDIelObjects4= [];
gdjs.GameCode.GDIelObjects5= [];
gdjs.GameCode.GDBackObjects1= [];
gdjs.GameCode.GDBackObjects2= [];
gdjs.GameCode.GDBackObjects3= [];
gdjs.GameCode.GDBackObjects4= [];
gdjs.GameCode.GDBackObjects5= [];
gdjs.GameCode.GDNewSpriteObjects1= [];
gdjs.GameCode.GDNewSpriteObjects2= [];
gdjs.GameCode.GDNewSpriteObjects3= [];
gdjs.GameCode.GDNewSpriteObjects4= [];
gdjs.GameCode.GDNewSpriteObjects5= [];
gdjs.GameCode.GDFrameObjects1= [];
gdjs.GameCode.GDFrameObjects2= [];
gdjs.GameCode.GDFrameObjects3= [];
gdjs.GameCode.GDFrameObjects4= [];
gdjs.GameCode.GDFrameObjects5= [];
gdjs.GameCode.GDTopObjects1= [];
gdjs.GameCode.GDTopObjects2= [];
gdjs.GameCode.GDTopObjects3= [];
gdjs.GameCode.GDTopObjects4= [];
gdjs.GameCode.GDTopObjects5= [];
gdjs.GameCode.GDRightObjects1= [];
gdjs.GameCode.GDRightObjects2= [];
gdjs.GameCode.GDRightObjects3= [];
gdjs.GameCode.GDRightObjects4= [];
gdjs.GameCode.GDRightObjects5= [];
gdjs.GameCode.GDBallObjects1= [];
gdjs.GameCode.GDBallObjects2= [];
gdjs.GameCode.GDBallObjects3= [];
gdjs.GameCode.GDBallObjects4= [];
gdjs.GameCode.GDBallObjects5= [];
gdjs.GameCode.GDtopEnnemyObjects1= [];
gdjs.GameCode.GDtopEnnemyObjects2= [];
gdjs.GameCode.GDtopEnnemyObjects3= [];
gdjs.GameCode.GDtopEnnemyObjects4= [];
gdjs.GameCode.GDtopEnnemyObjects5= [];
gdjs.GameCode.GDleftEnnemyObjects1= [];
gdjs.GameCode.GDleftEnnemyObjects2= [];
gdjs.GameCode.GDleftEnnemyObjects3= [];
gdjs.GameCode.GDleftEnnemyObjects4= [];
gdjs.GameCode.GDleftEnnemyObjects5= [];
gdjs.GameCode.GDHeart1Objects1= [];
gdjs.GameCode.GDHeart1Objects2= [];
gdjs.GameCode.GDHeart1Objects3= [];
gdjs.GameCode.GDHeart1Objects4= [];
gdjs.GameCode.GDHeart1Objects5= [];
gdjs.GameCode.GDHeart2Objects1= [];
gdjs.GameCode.GDHeart2Objects2= [];
gdjs.GameCode.GDHeart2Objects3= [];
gdjs.GameCode.GDHeart2Objects4= [];
gdjs.GameCode.GDHeart2Objects5= [];
gdjs.GameCode.GDHeart3Objects1= [];
gdjs.GameCode.GDHeart3Objects2= [];
gdjs.GameCode.GDHeart3Objects3= [];
gdjs.GameCode.GDHeart3Objects4= [];
gdjs.GameCode.GDHeart3Objects5= [];
gdjs.GameCode.GDGameOverObjects1= [];
gdjs.GameCode.GDGameOverObjects2= [];
gdjs.GameCode.GDGameOverObjects3= [];
gdjs.GameCode.GDGameOverObjects4= [];
gdjs.GameCode.GDGameOverObjects5= [];
gdjs.GameCode.GDTopSpawnObjects1= [];
gdjs.GameCode.GDTopSpawnObjects2= [];
gdjs.GameCode.GDTopSpawnObjects3= [];
gdjs.GameCode.GDTopSpawnObjects4= [];
gdjs.GameCode.GDTopSpawnObjects5= [];
gdjs.GameCode.GDrightSpawnObjects1= [];
gdjs.GameCode.GDrightSpawnObjects2= [];
gdjs.GameCode.GDrightSpawnObjects3= [];
gdjs.GameCode.GDrightSpawnObjects4= [];
gdjs.GameCode.GDrightSpawnObjects5= [];
gdjs.GameCode.GDBonusSpawnObjects1= [];
gdjs.GameCode.GDBonusSpawnObjects2= [];
gdjs.GameCode.GDBonusSpawnObjects3= [];
gdjs.GameCode.GDBonusSpawnObjects4= [];
gdjs.GameCode.GDBonusSpawnObjects5= [];
gdjs.GameCode.GDBonusItemObjects1= [];
gdjs.GameCode.GDBonusItemObjects2= [];
gdjs.GameCode.GDBonusItemObjects3= [];
gdjs.GameCode.GDBonusItemObjects4= [];
gdjs.GameCode.GDBonusItemObjects5= [];
gdjs.GameCode.GDVictoryObjects1= [];
gdjs.GameCode.GDVictoryObjects2= [];
gdjs.GameCode.GDVictoryObjects3= [];
gdjs.GameCode.GDVictoryObjects4= [];
gdjs.GameCode.GDVictoryObjects5= [];
gdjs.GameCode.GDbackObjects1= [];
gdjs.GameCode.GDbackObjects2= [];
gdjs.GameCode.GDbackObjects3= [];
gdjs.GameCode.GDbackObjects4= [];
gdjs.GameCode.GDbackObjects5= [];
gdjs.GameCode.GDNewSpriteObjects1= [];
gdjs.GameCode.GDNewSpriteObjects2= [];
gdjs.GameCode.GDNewSpriteObjects3= [];
gdjs.GameCode.GDNewSpriteObjects4= [];
gdjs.GameCode.GDNewSpriteObjects5= [];
gdjs.GameCode.GDNewTextObjects1= [];
gdjs.GameCode.GDNewTextObjects2= [];
gdjs.GameCode.GDNewTextObjects3= [];
gdjs.GameCode.GDNewTextObjects4= [];
gdjs.GameCode.GDNewTextObjects5= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.condition4IsTrue_0 = {val:false};
gdjs.GameCode.condition5IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};
gdjs.GameCode.condition4IsTrue_1 = {val:false};
gdjs.GameCode.condition5IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects4);
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].setY(gdjs.GameCode.GDBallObjects4[i].getY() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(4))));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects4);
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].setX(gdjs.GameCode.GDBallObjects4[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(4))));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects4);
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].setY(gdjs.GameCode.GDBallObjects4[i].getY() + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(4))));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects3);
{for(var i = 0, len = gdjs.GameCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects3[i].setX(gdjs.GameCode.GDBallObjects3[i].getX() + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(4))));
}
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects4);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBallObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDBallObjects4[i].getVariableNumber(gdjs.GameCode.GDBallObjects4[i].getVariables().getFromIndex(0)) == 3 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBallObjects4[k] = gdjs.GameCode.GDBallObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDBallObjects4.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Heart1"), gdjs.GameCode.GDHeart1Objects4);
gdjs.copyArray(runtimeScene.getObjects("Heart2"), gdjs.GameCode.GDHeart2Objects4);
gdjs.copyArray(runtimeScene.getObjects("Heart3"), gdjs.GameCode.GDHeart3Objects4);
{for(var i = 0, len = gdjs.GameCode.GDHeart1Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDHeart1Objects4[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDHeart2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDHeart2Objects4[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDHeart3Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDHeart3Objects4[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects4);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBallObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDBallObjects4[i].getVariableNumber(gdjs.GameCode.GDBallObjects4[i].getVariables().getFromIndex(0)) == 2 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBallObjects4[k] = gdjs.GameCode.GDBallObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDBallObjects4.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Heart1"), gdjs.GameCode.GDHeart1Objects4);
gdjs.copyArray(runtimeScene.getObjects("Heart2"), gdjs.GameCode.GDHeart2Objects4);
gdjs.copyArray(runtimeScene.getObjects("Heart3"), gdjs.GameCode.GDHeart3Objects4);
{for(var i = 0, len = gdjs.GameCode.GDHeart3Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDHeart3Objects4[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDHeart2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDHeart2Objects4[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDHeart1Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDHeart1Objects4[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects4);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBallObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDBallObjects4[i].getVariableNumber(gdjs.GameCode.GDBallObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBallObjects4[k] = gdjs.GameCode.GDBallObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDBallObjects4.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Heart1"), gdjs.GameCode.GDHeart1Objects4);
gdjs.copyArray(runtimeScene.getObjects("Heart2"), gdjs.GameCode.GDHeart2Objects4);
gdjs.copyArray(runtimeScene.getObjects("Heart3"), gdjs.GameCode.GDHeart3Objects4);
{for(var i = 0, len = gdjs.GameCode.GDHeart3Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDHeart3Objects4[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDHeart2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDHeart2Objects4[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDHeart1Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDHeart1Objects4[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects3);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBallObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDBallObjects3[i].getVariableNumber(gdjs.GameCode.GDBallObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBallObjects3[k] = gdjs.GameCode.GDBallObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDBallObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Heart1"), gdjs.GameCode.GDHeart1Objects3);
gdjs.copyArray(runtimeScene.getObjects("Heart2"), gdjs.GameCode.GDHeart2Objects3);
gdjs.copyArray(runtimeScene.getObjects("Heart3"), gdjs.GameCode.GDHeart3Objects3);
{for(var i = 0, len = gdjs.GameCode.GDHeart3Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDHeart3Objects3[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDHeart2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDHeart2Objects3[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDHeart1Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDHeart1Objects3[i].hide();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(1), false);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects4Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects4});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDtopEnnemyObjects4Objects = Hashtable.newFrom({"topEnnemy": gdjs.GameCode.GDtopEnnemyObjects4});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects4Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects4});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDleftEnnemyObjects4Objects = Hashtable.newFrom({"leftEnnemy": gdjs.GameCode.GDleftEnnemyObjects4});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBonusItemObjects3Objects = Hashtable.newFrom({"BonusItem": gdjs.GameCode.GDBonusItemObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects3});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects4);
gdjs.copyArray(runtimeScene.getObjects("topEnnemy"), gdjs.GameCode.GDtopEnnemyObjects4);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects4Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDtopEnnemyObjects4Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = !(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Invincibilite") <= 1.5);
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8490364);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBallObjects4 */
/* Reuse gdjs.GameCode.GDtopEnnemyObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].returnVariable(gdjs.GameCode.GDBallObjects4[i].getVariables().getFromIndex(0)).sub(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Flash").Flash(1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDtopEnnemyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDtopEnnemyObjects4[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BonusChrono");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Invincibilite");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects4);
gdjs.copyArray(runtimeScene.getObjects("leftEnnemy"), gdjs.GameCode.GDleftEnnemyObjects4);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects4Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDleftEnnemyObjects4Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = !(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Invincibilite") <= 1.5);
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8492260);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBallObjects4 */
/* Reuse gdjs.GameCode.GDleftEnnemyObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].returnVariable(gdjs.GameCode.GDBallObjects4[i].getVariables().getFromIndex(0)).sub(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Flash").Flash(1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDleftEnnemyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDleftEnnemyObjects4[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BonusChrono");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Invincibilite");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("BonusItem"), gdjs.GameCode.GDBonusItemObjects3);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBonusItemObjects3Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects3Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8493628);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBallObjects3 */
/* Reuse gdjs.GameCode.GDBonusItemObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects3[i].returnVariable(gdjs.GameCode.GDBallObjects3[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDBonusItemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBonusItemObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


{
}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDTopSpawnObjects3Objects = Hashtable.newFrom({"TopSpawn": gdjs.GameCode.GDTopSpawnObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDrightSpawnObjects3Objects = Hashtable.newFrom({"rightSpawn": gdjs.GameCode.GDrightSpawnObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDtopEnnemyObjects3Objects = Hashtable.newFrom({"topEnnemy": gdjs.GameCode.GDtopEnnemyObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDleftEnnemyObjects3Objects = Hashtable.newFrom({"leftEnnemy": gdjs.GameCode.GDleftEnnemyObjects3});
gdjs.GameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TopSpawn"), gdjs.GameCode.GDTopSpawnObjects3);
gdjs.copyArray(runtimeScene.getObjects("rightSpawn"), gdjs.GameCode.GDrightSpawnObjects3);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDTopSpawnObjects3Objects);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDrightSpawnObjects3Objects);
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spawn") > 2;
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition3IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8495964);
}
}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDTopSpawnObjects3 */
/* Reuse gdjs.GameCode.GDrightSpawnObjects3 */
gdjs.GameCode.GDleftEnnemyObjects3.length = 0;

gdjs.GameCode.GDtopEnnemyObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDtopEnnemyObjects3Objects, (( gdjs.GameCode.GDTopSpawnObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDTopSpawnObjects3[0].getX()), (( gdjs.GameCode.GDTopSpawnObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDTopSpawnObjects3[0].getY()), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDleftEnnemyObjects3Objects, (( gdjs.GameCode.GDrightSpawnObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDrightSpawnObjects3[0].getX()), (( gdjs.GameCode.GDrightSpawnObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDrightSpawnObjects3[0].getY()), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawn");
}}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("leftEnnemy"), gdjs.GameCode.GDleftEnnemyObjects3);
gdjs.copyArray(runtimeScene.getObjects("topEnnemy"), gdjs.GameCode.GDtopEnnemyObjects3);
{for(var i = 0, len = gdjs.GameCode.GDtopEnnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDtopEnnemyObjects3[i].setY(gdjs.GameCode.GDtopEnnemyObjects3[i].getY() + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3))));
}
}{for(var i = 0, len = gdjs.GameCode.GDleftEnnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDleftEnnemyObjects3[i].setX(gdjs.GameCode.GDleftEnnemyObjects3[i].getX() + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("leftEnnemy"), gdjs.GameCode.GDleftEnnemyObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDleftEnnemyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDleftEnnemyObjects2[i].getX() >= 1458 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDleftEnnemyObjects2[k] = gdjs.GameCode.GDleftEnnemyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDleftEnnemyObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDleftEnnemyObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDleftEnnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDleftEnnemyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBonusSpawnObjects1Objects = Hashtable.newFrom({"BonusSpawn": gdjs.GameCode.GDBonusSpawnObjects1});
gdjs.GameCode.mapOfEmptyGDBonusItemObjects = Hashtable.newFrom({"BonusItem": []});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBonusItemObjects1Objects = Hashtable.newFrom({"BonusItem": gdjs.GameCode.GDBonusItemObjects1});
gdjs.GameCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("BonusSpawn"), gdjs.GameCode.GDBonusSpawnObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
gdjs.GameCode.condition4IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBallObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBallObjects1[i].getVariableNumber(gdjs.GameCode.GDBallObjects1[i].getVariables().getFromIndex(0)) < 3 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBallObjects1[k] = gdjs.GameCode.GDBallObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBallObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBonusSpawnObjects1Objects);
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BonusChrono") > 7;
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
gdjs.GameCode.condition3IsTrue_0.val = gdjs.evtTools.object.getPickedInstancesCount(gdjs.GameCode.mapOfEmptyGDBonusItemObjects) == 0;
}if ( gdjs.GameCode.condition3IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition4IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8499748);
}
}}
}
}
}
if (gdjs.GameCode.condition4IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBonusSpawnObjects1 */
gdjs.GameCode.GDBonusItemObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBonusItemObjects1Objects, (( gdjs.GameCode.GDBonusSpawnObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBonusSpawnObjects1[0].getX()), (( gdjs.GameCode.GDBonusSpawnObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBonusSpawnObjects1[0].getY()), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BonusChrono");
}}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


gdjs.GameCode.eventsList8(runtimeScene);
}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList7(runtimeScene);
}


{


gdjs.GameCode.eventsList9(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGameOverObjects1Objects = Hashtable.newFrom({"GameOver": gdjs.GameCode.GDGameOverObjects1});
gdjs.GameCode.eventsList11 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDGameOverObjects1 */

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGameOverObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].setPosition(930,687);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDVictoryObjects1Objects = Hashtable.newFrom({"Victory": gdjs.GameCode.GDVictoryObjects1});
gdjs.GameCode.eventsList12 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDVictoryObjects1 */

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDVictoryObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Outro", false);
}}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawn");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BonusChrono");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timeGame");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timeGame") <= 35;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.GameCode.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Victory"), gdjs.GameCode.GDVictoryObjects1);
{for(var i = 0, len = gdjs.GameCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGameOverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDVictoryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDVictoryObjects1[i].hide();
}
}{runtimeScene.getVariables().getFromIndex(3).add(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "timeGame") / 5000);
}{runtimeScene.getVariables().getFromIndex(4).add(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "timeGame") / 10000);
}
{ //Subevents
gdjs.GameCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.GameCode.GDGameOverObjects1);
{for(var i = 0, len = gdjs.GameCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGameOverObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "timeGame");
}
{ //Subevents
gdjs.GameCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timeGame") > 35;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Victory"), gdjs.GameCode.GDVictoryObjects1);
{for(var i = 0, len = gdjs.GameCode.GDVictoryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDVictoryObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.GameCode.eventsList12(runtimeScene);} //End of subevents
}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDIelObjects1.length = 0;
gdjs.GameCode.GDIelObjects2.length = 0;
gdjs.GameCode.GDIelObjects3.length = 0;
gdjs.GameCode.GDIelObjects4.length = 0;
gdjs.GameCode.GDIelObjects5.length = 0;
gdjs.GameCode.GDBackObjects1.length = 0;
gdjs.GameCode.GDBackObjects2.length = 0;
gdjs.GameCode.GDBackObjects3.length = 0;
gdjs.GameCode.GDBackObjects4.length = 0;
gdjs.GameCode.GDBackObjects5.length = 0;
gdjs.GameCode.GDNewSpriteObjects1.length = 0;
gdjs.GameCode.GDNewSpriteObjects2.length = 0;
gdjs.GameCode.GDNewSpriteObjects3.length = 0;
gdjs.GameCode.GDNewSpriteObjects4.length = 0;
gdjs.GameCode.GDNewSpriteObjects5.length = 0;
gdjs.GameCode.GDFrameObjects1.length = 0;
gdjs.GameCode.GDFrameObjects2.length = 0;
gdjs.GameCode.GDFrameObjects3.length = 0;
gdjs.GameCode.GDFrameObjects4.length = 0;
gdjs.GameCode.GDFrameObjects5.length = 0;
gdjs.GameCode.GDTopObjects1.length = 0;
gdjs.GameCode.GDTopObjects2.length = 0;
gdjs.GameCode.GDTopObjects3.length = 0;
gdjs.GameCode.GDTopObjects4.length = 0;
gdjs.GameCode.GDTopObjects5.length = 0;
gdjs.GameCode.GDRightObjects1.length = 0;
gdjs.GameCode.GDRightObjects2.length = 0;
gdjs.GameCode.GDRightObjects3.length = 0;
gdjs.GameCode.GDRightObjects4.length = 0;
gdjs.GameCode.GDRightObjects5.length = 0;
gdjs.GameCode.GDBallObjects1.length = 0;
gdjs.GameCode.GDBallObjects2.length = 0;
gdjs.GameCode.GDBallObjects3.length = 0;
gdjs.GameCode.GDBallObjects4.length = 0;
gdjs.GameCode.GDBallObjects5.length = 0;
gdjs.GameCode.GDtopEnnemyObjects1.length = 0;
gdjs.GameCode.GDtopEnnemyObjects2.length = 0;
gdjs.GameCode.GDtopEnnemyObjects3.length = 0;
gdjs.GameCode.GDtopEnnemyObjects4.length = 0;
gdjs.GameCode.GDtopEnnemyObjects5.length = 0;
gdjs.GameCode.GDleftEnnemyObjects1.length = 0;
gdjs.GameCode.GDleftEnnemyObjects2.length = 0;
gdjs.GameCode.GDleftEnnemyObjects3.length = 0;
gdjs.GameCode.GDleftEnnemyObjects4.length = 0;
gdjs.GameCode.GDleftEnnemyObjects5.length = 0;
gdjs.GameCode.GDHeart1Objects1.length = 0;
gdjs.GameCode.GDHeart1Objects2.length = 0;
gdjs.GameCode.GDHeart1Objects3.length = 0;
gdjs.GameCode.GDHeart1Objects4.length = 0;
gdjs.GameCode.GDHeart1Objects5.length = 0;
gdjs.GameCode.GDHeart2Objects1.length = 0;
gdjs.GameCode.GDHeart2Objects2.length = 0;
gdjs.GameCode.GDHeart2Objects3.length = 0;
gdjs.GameCode.GDHeart2Objects4.length = 0;
gdjs.GameCode.GDHeart2Objects5.length = 0;
gdjs.GameCode.GDHeart3Objects1.length = 0;
gdjs.GameCode.GDHeart3Objects2.length = 0;
gdjs.GameCode.GDHeart3Objects3.length = 0;
gdjs.GameCode.GDHeart3Objects4.length = 0;
gdjs.GameCode.GDHeart3Objects5.length = 0;
gdjs.GameCode.GDGameOverObjects1.length = 0;
gdjs.GameCode.GDGameOverObjects2.length = 0;
gdjs.GameCode.GDGameOverObjects3.length = 0;
gdjs.GameCode.GDGameOverObjects4.length = 0;
gdjs.GameCode.GDGameOverObjects5.length = 0;
gdjs.GameCode.GDTopSpawnObjects1.length = 0;
gdjs.GameCode.GDTopSpawnObjects2.length = 0;
gdjs.GameCode.GDTopSpawnObjects3.length = 0;
gdjs.GameCode.GDTopSpawnObjects4.length = 0;
gdjs.GameCode.GDTopSpawnObjects5.length = 0;
gdjs.GameCode.GDrightSpawnObjects1.length = 0;
gdjs.GameCode.GDrightSpawnObjects2.length = 0;
gdjs.GameCode.GDrightSpawnObjects3.length = 0;
gdjs.GameCode.GDrightSpawnObjects4.length = 0;
gdjs.GameCode.GDrightSpawnObjects5.length = 0;
gdjs.GameCode.GDBonusSpawnObjects1.length = 0;
gdjs.GameCode.GDBonusSpawnObjects2.length = 0;
gdjs.GameCode.GDBonusSpawnObjects3.length = 0;
gdjs.GameCode.GDBonusSpawnObjects4.length = 0;
gdjs.GameCode.GDBonusSpawnObjects5.length = 0;
gdjs.GameCode.GDBonusItemObjects1.length = 0;
gdjs.GameCode.GDBonusItemObjects2.length = 0;
gdjs.GameCode.GDBonusItemObjects3.length = 0;
gdjs.GameCode.GDBonusItemObjects4.length = 0;
gdjs.GameCode.GDBonusItemObjects5.length = 0;
gdjs.GameCode.GDVictoryObjects1.length = 0;
gdjs.GameCode.GDVictoryObjects2.length = 0;
gdjs.GameCode.GDVictoryObjects3.length = 0;
gdjs.GameCode.GDVictoryObjects4.length = 0;
gdjs.GameCode.GDVictoryObjects5.length = 0;
gdjs.GameCode.GDbackObjects1.length = 0;
gdjs.GameCode.GDbackObjects2.length = 0;
gdjs.GameCode.GDbackObjects3.length = 0;
gdjs.GameCode.GDbackObjects4.length = 0;
gdjs.GameCode.GDbackObjects5.length = 0;
gdjs.GameCode.GDNewSpriteObjects1.length = 0;
gdjs.GameCode.GDNewSpriteObjects2.length = 0;
gdjs.GameCode.GDNewSpriteObjects3.length = 0;
gdjs.GameCode.GDNewSpriteObjects4.length = 0;
gdjs.GameCode.GDNewSpriteObjects5.length = 0;
gdjs.GameCode.GDNewTextObjects1.length = 0;
gdjs.GameCode.GDNewTextObjects2.length = 0;
gdjs.GameCode.GDNewTextObjects3.length = 0;
gdjs.GameCode.GDNewTextObjects4.length = 0;
gdjs.GameCode.GDNewTextObjects5.length = 0;

gdjs.GameCode.eventsList13(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
