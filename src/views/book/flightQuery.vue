<template lang="html">
  <div class="">
     _#苹果#_
     _#苹果#_
  </div>
</template>
<i18n>
	{
		苹果: { 
			en: 'Apple',
			jp: 'リンゴ', 
			fr: 'Pommes' 
		}
	}
</i18n>
<script>
function show(num) {
  console.log('有' + num + '_#苹果#_');
}

show(8);
export default {
}
</script>

<style lang="css">
</style>
