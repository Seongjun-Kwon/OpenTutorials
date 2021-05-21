var Body=
{
    setColor : function(color) {document.querySelector('body').style.color=color;},
    setBackgroundColor : function(color) {document.querySelector('body').style.backgroundColor=color;}
}

var Links=
{
  LinksSetColor : function(activecolor, elsecolor)
  {
    var alist=document.querySelectorAll('a');
    var active=document.getElementById('active');
    var i=0;
    while(i<alist.length)
    {
      if(alist[i]===active)
          alist[i].style.color=activeColor;
      else
          alist[i].style.color=elseColor;
      i=i+1;
    }
  }
}

function night_day_handler(self)
{
  if(self.value==='night')
  {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value='day';
    Links.LinksSetColor('red', 'blue');
  }

  else
  {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value='night';
    Links.setColor('red', 'blue');
  }
}
