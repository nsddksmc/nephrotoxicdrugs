function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6la2bySkX7u":
        Script1();
        break;
      case "5rYX6pF3p10":
        Script2();
        break;
      case "5uRROU4g4lO":
        Script3();
        break;
      case "5YVgDXyhdQA":
        Script4();
        break;
      case "5zVzE74r0N7":
        Script5();
        break;
      case "5wnzhFG1LCs":
        Script6();
        break;
      case "6PFYa9TDZKh":
        Script7();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script6()
{
  $("#tab-customlink").show();
}

function Script7()
{
  window.print();
}

