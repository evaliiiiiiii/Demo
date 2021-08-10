# PHP quick guideline

## getting started
PHP statements are started with " <?php " and ended with " ?> "
```
<?php /* code here */ php?>
```

## variable, array
the variables need to be started with "$"
```
<?php $var = "hello world"; ?>
/* note: each statement in PHP needs to be ended with ";" */
<?php
      $array = array(1,2,3);
      echo $array[0];
      /* reslut is 1. */
?>
```

## echo
```
<?php echo $var; ?>
/* the type of $var needs to be string and number */
/* abbreviation */
<?=$var?>
```

## var_dump
dump arrays
```
<?php echo var_dump( $array ) ; ?>
```

## include
include the other php files, like header.php or footer.php
```
<?php include('header.php'); ?>
```

## if statement
```
<?php 
  if( condition ){
  
  } else if ( condition2 ) {
  
  } else {
  
  }
?>
```

## for loop
```
<?php 
  for( $i=0 ; $i<5 ; $i++ ){
    echo $i;
  } 
?>
/* result is: 01234*/

<?php 
  foreach( $array as $item){
    echo $item;
  }
?>
/* result is: 123*/
```

## for loop (advanced)

### array_chunk($array,size)
Split an array into chunks，
常用於列表顯示時使用，例如商品列表共有12個商品，依設計切版後有可能會發現html需要4個一組，就可用這個function處理
```
<?php 
  foreach(array_chunk($array,2) as $item){
    echo var_dump($item);
  }
?>
/* result is:
Array
(
  [0] => Array
    (
      [0] => 1
      [1] => 2
    )

  [1] => Array
    (
      [0] => 3
    )
)
*/
```

## others
```
foreach(){
}

equals to

foreach():
endforeach;

/*-------*/

if(){
}

equals to

if():
endif;

...and so on.
```

[PHP documentation](https://www.php.net/manual/en/langref.php)