<template>
	<div class="ui container">
		<div class="ui fluid icon input">
			<input type="text" placeholder="Search a very wide input...">
			<i class="search icon"></i>
		</div>
		<div class="ui horizontal divider">病了么</div>
		<div class="ui grid">
			<div class="two wide column">
				<div class="ui vertical menu">
					<div class="item">
						<div class="header">Products</div>
						<div class="menu">
							<a class="item">Enterprise</a>
							<a class="item">Consumer</a>
						</div>
					</div>
					<div class="item">
						<div class="header">CMS Solutions</div>
						<div class="menu">
							<a class="item">Rails</a>
							<a class="item">Python</a>
							<a class="item">PHP</a>
						</div>
					</div>
					<div class="item">
						<div class="header">Hosting</div>
						<div class="menu">
							<a class="item">Shared</a>
							<a class="item">Dedicated</a>
						</div>
					</div>
					<div class="item">
						<div class="header">Support</div>
						<div class="menu">
							<a class="item">E-mail Support</a>
							<a class="item">FAQs</a>
						</div>
					</div>
				</div>
			</div>
			<div class="one wide column">
			</div>
			<div class="thirteen wide stretched column">
				<div class="ui segment">
					<div class="ui link cards">
						<!-- 遍历 -->
						<!-- 
						<div class="card">
							<div class="image">
								<img src="/images/avatar2/large/matthew.png">
							</div>
							<div class="content">
								<div class="header">Matt Giampietro</div>
								<div class="meta">
									<a>Friends</a>
								</div>
								<div class="description">Matthew is an interior designer living in New York. </div>
							</div>
							<div class="extra content">
								<span class="right floated">Joined in 2013 </span>
								<span><i class="user icon"></i> 75 Friends </span>
							</div>
						</div> -->
						
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.container{
		margin-top: 100px;
	}
	@media only screen and (min-width: 1200px){.ui.container {width: 1150px;}}
</style>
