
$( document ).ready(function() {
     $('#content').html("");
    $('#content').append("<h3>Menu</h3>");
    var menu = ["<div class='menu-item'></div>"];
    var menu_title = ["<h4>Monkey Burger</h4>","<h4>Monkey Burger</h4>","<h4>Monkey Burger</h4>","<h4>Monkey Burger</h4>"]
    var menu_content = ["<p>Obvious original. Who doesn't love monkeys meat!</p>","<p>Obvious original. Who doesn't love monkeys meat!</p>",
                        "<p>Obvious original. Who doesn't love monkeys meat!</p>","<p>Obvious original. Who doesn't love monkeys meat!</p>"]
    for(var i = 0;i<menu_title.length;i++){
        $('#content').append(menu[0]);
        $('.menu-item:last').append(menu_title[i]);
        $('.menu-item:last').append(menu_content[i]);
    }
});
$('#home').click(function(){
    $('#content').html("");
    $('#content').append("<h3>Menu</h3>");
    var menu = ["<div class='menu-item'></div>"];
    var menu_title = ["<h4>Monkey Burger</h4>","<h4>Monkey Burger</h4>","<h4>Monkey Burger</h4>","<h4>Monkey Burger</h4>"]
    var menu_content = ["<p>Obvious original. Who doesn't love monkeys meat!</p>","<p>Obvious original. Who doesn't love monkeys meat!</p>",
                        "<p>Obvious original. Who doesn't love monkeys meat!</p>","<p>Obvious original. Who doesn't love monkeys meat!</p>"]
    for(var i = 0;i<menu_title.length;i++){
        $('#content').append(menu[0]);
        $('.menu-item:last').append(menu_title[i]);
        $('.menu-item:last').append(menu_content[i]);
    }
                       
});

$('#about').click(function(){
    $('#content').html("");
    $('#content').append("<h3>About Us</h3>")
    var menu = ["<div class='about-us'></div>"];
    var menu_content = ["<p>Wacky burger was started in July 2017. It has prides itself on its unique recipies, and crazy food creations.<br>"+
    "Based on the project idea  from The Odin Project, Wacky burger places little emphasis on it's actual food.<br> Instead It prides itself in it's" +
    "adept JQuery and JaveScript usage</p>"];
    
    $('#content').append(menu[0]);
    $('.about-us:last').append(menu_content[0]);

                       
});

$('#contact').click(function(){
    $('#content').html("");
    $('#content').append("<h3>Contact Us</h3>")
    var menu = ["<form class='contact-us'></form>"];
    var form_content = ["Name","Email","Note"];
    for(var i = 0;i<form_content.length;i++){
        $('#content').append(menu[0]);
        $('.contact-us:last').append(form_content[i]+": ");
        $('.contact-us:last').append("<input type='text' name="+form_content[i]+"><br>");
        
    }
                       
});