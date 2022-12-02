gdjs.GameCode = {};
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
gdjs.GameCode.GDEnnemyObjects1= [];
gdjs.GameCode.GDEnnemyObjects2= [];
gdjs.GameCode.GDEnnemyObjects3= [];
gdjs.GameCode.GDEnnemyObjects4= [];
gdjs.GameCode.GDEnnemyObjects5= [];
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

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects4);
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].setY(gdjs.GameCode.GDBallObjects4[i].getY() - (5));
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
    gdjs.GameCode.GDBallObjects4[i].setX(gdjs.GameCode.GDBallObjects4[i].getX() - (5));
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
    gdjs.GameCode.GDBallObjects4[i].setY(gdjs.GameCode.GDBallObjects4[i].getY() + (5));
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
    gdjs.GameCode.GDBallObjects3[i].setX(gdjs.GameCode.GDBallObjects3[i].getX() + (5));
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


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnnemyObjects2Objects = Hashtable.newFrom({"Ennemy": gdjs.GameCode.GDEnnemyObjects2});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Ennemy"), gdjs.GameCode.GDEnnemyObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnnemyObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8341476);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBallObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].returnVariable(gdjs.GameCode.GDBallObjects2[i].getVariables().getFromIndex(0)).sub(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].getBehavior("Flash").Flash(1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDTopSpawnObjects3Objects = Hashtable.newFrom({"TopSpawn": gdjs.GameCode.GDTopSpawnObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnnemyObjects3Objects = Hashtable.newFrom({"Ennemy": gdjs.GameCode.GDEnnemyObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDTopSpawnObjects2Objects = Hashtable.newFrom({"TopSpawn": gdjs.GameCode.GDTopSpawnObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnnemyObjects2Objects = Hashtable.newFrom({"Ennemy": gdjs.GameCode.GDEnnemyObjects2});
gdjs.GameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TopSpawn"), gdjs.GameCode.GDTopSpawnObjects3);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDTopSpawnObjects3Objects);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spawn") > 2;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDTopSpawnObjects3 */
gdjs.GameCode.GDEnnemyObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnnemyObjects3Objects, (( gdjs.GameCode.GDTopSpawnObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDTopSpawnObjects3[0].getX()), (( gdjs.GameCode.GDTopSpawnObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDTopSpawnObjects3[0].getY()), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TopSpawn"), gdjs.GameCode.GDTopSpawnObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDTopSpawnObjects2Objects);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spawn") > 2;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDTopSpawnObjects2 */
gdjs.GameCode.GDEnnemyObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnnemyObjects2Objects, (( gdjs.GameCode.GDTopSpawnObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDTopSpawnObjects2[0].getX()), (( gdjs.GameCode.GDTopSpawnObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDTopSpawnObjects2[0].getY()), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawn");
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ennemy"), gdjs.GameCode.GDEnnemyObjects1);
{for(var i = 0, len = gdjs.GameCode.GDEnnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnnemyObjects1[i].setY(gdjs.GameCode.GDEnnemyObjects1[i].getY() + (3));
}
}}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGameOverObjects1Objects = Hashtable.newFrom({"GameOver": gdjs.GameCode.GDGameOverObjects1});
gdjs.GameCode.eventsList8 = function(runtimeScene) {

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


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawn");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.GameCode.GDGameOverObjects1);
{for(var i = 0, len = gdjs.GameCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGameOverObjects1[i].hide();
}
}
{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
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
}
{ //Subevents
gdjs.GameCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

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
gdjs.GameCode.GDEnnemyObjects1.length = 0;
gdjs.GameCode.GDEnnemyObjects2.length = 0;
gdjs.GameCode.GDEnnemyObjects3.length = 0;
gdjs.GameCode.GDEnnemyObjects4.length = 0;
gdjs.GameCode.GDEnnemyObjects5.length = 0;
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

gdjs.GameCode.eventsList9(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
