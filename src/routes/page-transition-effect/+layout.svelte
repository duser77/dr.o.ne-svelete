<svelte:head>
	<script src="https://kit.fontawesome.com/667417c7ec.js" crossorigin="anonymous"></script>
	<meta name="description" content="Admin" />
	<script src="https://accounts.google.com/gsi/client"></script>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
  	<script src="https://apis.google.com/js/api:client.js"></script>
</svelte:head>
<script>

</script>


<template>
	<div class="page">
	  <div class="navbar">
		<div class="navbar-bg"></div>
		<div class="navbar-inner sliding">
		  <div class="left">
			<a href="#" class="link back">
			  <i class="icon icon-back"></i>
			  <span class="if-not-md">Back</span>
			</a>
		  </div>
		  <div class="title">${$f7route.params.effect}</div>
		</div>
	  </div>
	  <div class="page-content">
		<div class="block block-strong text-align-center">
		  <p>This page was loaded with <b>${$f7route.params.effect}</b> transition.</p>
		</div>
	  </div>
	</div>
  </template>
  

<style>
	
</style>