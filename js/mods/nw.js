var nw = require('nw.gui');
var menu = new nw.Menu();
nw.App.addOriginAccessWhitelistEntry('http://192.168.159.1/', 'app', 'myapp', true);
var win = nw.Window.get();
win.x = 35;
win.y = 35;
win.width = 1500;
win.height = 800;

/*menu.append(new nw.MenuItem({
  label:'Item A',
  click: function(){
    alert('You have clicked item A');
  }
}));

menu.append(new nw.MenuItem({
  label:'Item B',
  click: function(){
    alert('You have clicked item B');
  }
}));

menu.append(new nw.MenuItem({type:'separator'}));

menu.append(new nw.MenuItem({
  label:'Item C',
  click: function(){
    alert('You have clicked item C');
  }
}));

document.body.addEventListener('contextmenu', function(ev){
  ev.preventDefault();
  menu.popup(ev.x,ev.y);
  return false;
}, false);*/
