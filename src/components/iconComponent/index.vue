<template>
  	<svg :class='`icon ${className}`' aria-hidden="true">
			<use :xlink:href='`#${icon}`'></use>
		</svg>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  name: 'iconComponent',
  props: {
    icon: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  }
}
</script>
