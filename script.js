** incluir biblioteca jquery.js
** ter noções básicas de objetos

Sempre for feito um $.post() para url "adicionar/carrinho" com os dados do sku e quantidade do produto, 
a resposta do server esta configurado para retornar um objeto com os item(s) adicionado(s) no formato json.

**os dados desse objeto josn são os mesmo encontrados no loop de {% cartitemns %}.

ex: 
$.post( "/carrinho/adicionar",{ sku:'1004-4',quantity:'1' }, function( data ) {
  console.log(data)
},"json")

Resposta: [objeto json]
Object {id: 29, subtotal: 80, total: 80, shipping_method: null, shipping_price: 0…}


Você pode percorrer os indíces desse objeto usando each do jquery:

$.post( "/carrinho/adicionar",{ sku:'1004-4',quantity:'1' }, function( data ) {
 $( cart.items ).each(function(index, item){
  console.log( item )
 });
},"json")

Object {id: 78, quantity: 1, price: 80, subtotal: 80, total: 80…}
Object {id: 79, quantity: 1, price: 80, subtotal: 80, total: 80…}
...

Existem várias formas de montar o dropdown e aba de carrinho via javascript, 
o exemplo abaixo temos função que serve de modelo para carregar o html com uma lista de items a cada interação do for de items.

function montaCarrinho( item ) {
 // deixe uma li de marcação no html
 // variavel cart_preview clona a li de marcação que será alimentada com o conteúdo do item  
 var cart_preview = $( "ul.cart-items li" ).clone();
 // coloca para dentro da lista
 cart_preview.appendTo( "ul.cart-items" );
 // pesquisa dentro da li pela tag image e inclui o atributo src
 cart_preview.find( "img" ).attr("src",item.image_url)
 // pesquisa dentro da li  pela classe .name e inclui o nome
 cart_preview.find( ".name" ).text(item.product_name)
 // pesquisa dentro da li pela classe .price e inclui o preço
 cart_preview.find( ".price" ).html(item.price );
 .....
}

$.post( "/carrinho/adicionar",{ sku:'1004-4',quantity:'1' }, function( data ) {
 $( cart.items ).each(function(index, item){
  // vai montando o html com o(s) item(s)
  montaCarrinho(item)
 });
},"json")

