** incluir biblioteca jquery.js
** ter noções básicas de objetos

Nossa api de carrinho esta configurada para  retonar um objeto com os items que estão no carrinho cada vez que um item for adicionado.

Os dados do objeto são os mesmo encontrados no loop de {% cartitemns %}.

Uma das formas de adicionar os items na aba de carrinho é toda a vez que for enviado um item  por ajax com  $post o evento no sucess 
recebe o objeto com os items

$.post( "/carrinho/adicionar",{ sku:'1004-4',quantity:'1' }, function( data ) {
  console.log(data)
},"json")

Os dados para o front 
Object {id: 29, subtotal: 80, total: 80, shipping_method: null, shipping_price: 0…}

Para percorrer o objeto implemente a função:

$.post( "/carrinho/adicionar",{ sku:'1004-4',quantity:'1' }, function( data ) {
 $( cart.items ).each(function(index, item){
  console.log( item )
  // aqui você pode chamar um função que vai montar o html com  os items adicionados
 });
},"json


