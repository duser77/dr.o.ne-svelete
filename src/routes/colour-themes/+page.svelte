<!-- <script>
	var stylesheet;
	var globalTheme = 'light';
	var globalBarsStyle = 'empty';
	var globalCustomColor = '';
	var globalCustomProperties = '';
  
	export default (props, { $f7, $, $on, $onMounted, $update }) => {
	  const colors = [
		'red',
		'green',
		'blue',
		'pink',
		'yellow',
		'orange',
		'purple',
		'deeppurple',
		'lightblue',
		'teal',
		'lime',
		'deeporange',
		'gray',
		'black',
	  ];
	  let theme = globalTheme;
	  let barsStyle = globalBarsStyle;
	  let customColor = globalCustomColor;
	  let customProperties = globalCustomProperties;
	  let themeColor = globalCustomColor || $('html').css('--f7-theme-color').trim();
  
	  let colorPicker;
  
	  const setWebThemeColor = (hexColor) => {
		const $meta = $('meta[name="theme-color"]');
		if (!$meta.length) {
		  $('head').append(`<meta name="theme-color" content="${hexColor}">`);
		  return;
		}
		$meta.attr('content', hexColor);
	  }
  
	  const generateStylesheet = () => {
		var styles = '';
		if (customColor) {
		  const colorThemeProperties = $f7.utils.colorThemeCSSProperties(customColor);
		  if (Object.keys(colorThemeProperties).length) {
			styles += `
  /* Custom color theme */
  :root {
	${Object.keys(colorThemeProperties)
				.map(key => `${key}: ${colorThemeProperties[key]};`)
				.join('\n  ')}
  }`;
		  }
		}
		if (barsStyle === 'fill') {
		  const colorThemeRgb = $('html').css('--f7-theme-color-rgb').trim().split(',').map(c => c.trim());
		  styles += `
  /* Invert navigation bars to fill style */
  :root,
  :root.dark,
  :root .dark {
	--f7-bars-bg-color: var(--f7-theme-color);
	--f7-bars-bg-color-rgb: var(--f7-theme-color-rgb);
	--f7-bars-translucent-opacity: 0.9;
	--f7-bars-text-color: #fff;
	--f7-bars-link-color: #fff;
	--f7-navbar-subtitle-text-color: rgba(255,255,255,0.85);
	--f7-bars-border-color: transparent;
	--f7-tabbar-link-active-color: #fff;
	--f7-tabbar-link-inactive-color: rgba(255,255,255,0.54);
	--f7-sheet-border-color: transparent;
	--f7-tabbar-link-active-border-color: #fff;
  }
  .appbar,
  .navbar,
  .toolbar,
  .subnavbar,
  .calendar-header,
  .calendar-footer {
	--f7-touch-ripple-color: var(--f7-touch-ripple-white);
	--f7-link-highlight-color: var(--f7-link-highlight-white);
	--f7-link-touch-ripple-color: var(--f7-touch-ripple-white);
	--f7-button-text-color: #fff;
	--f7-button-pressed-bg-color: rgba(255,255,255,0.1);
  }
  
  .navbar-large-transparent,
  .navbar-large.navbar-transparent {
	--f7-navbar-large-title-text-color: #000;
  
	--r: ${colorThemeRgb[0]};
	--g: ${colorThemeRgb[1]};
	--b: ${colorThemeRgb[2]};
	--progress: var(--f7-navbar-large-collapse-progress);
	--f7-bars-link-color: rgb(
	  calc(var(--r) + (255 - var(--r)) * var(--progress)),
	  calc(var(--g) + (255 - var(--g)) * var(--progress)),
	  calc(var(--b) + (255 - var(--b)) * var(--progress))
	);
  }
  .dark .navbar-large-transparent,
  .dark .navbar-large.navbar-transparent {
	--f7-navbar-large-title-text-color: #fff;
  }
			`;
		}
		setTimeout(() => {
		  if (barsStyle === 'fill') {
			setWebThemeColor(themeColor)
		  } else if (theme === 'light') {
			setWebThemeColor('#fff')
		  } else if (theme === 'dark') {
			setWebThemeColor('#000')
		  }
		})
  
		return styles.trim();
	  }
	  const setLayoutTheme = (newTheme) => {
		var $html = $('html');
		globalTheme = newTheme;
		$html.removeClass('dark light').addClass(globalTheme);
		theme = globalTheme;
		$update();
	  }
	  const setColorTheme = (newColor) => {
		var $html = $('html');
		var currentColorClass = $html[0].className.match(/color-theme-([a-z]*)/);
		if (currentColorClass) $html.removeClass(currentColorClass[0])
		$html.addClass('color-theme-' + newColor);
		unsetCustomColor();
		themeColor = $html.css('--f7-color-' + newColor).trim();
		colorPicker.setValue({
		  hex: themeColor,
		});
		$update();
	  }
	  const setBarsStyle = (newBarsStyle) => {
		globalBarsStyle = newBarsStyle;
		barsStyle = globalBarsStyle;
  
		globalCustomProperties = generateStylesheet();
		stylesheet.innerHTML = globalCustomProperties;
		customProperties = globalCustomProperties;
		$update();
	  }
	  const unsetCustomColor = (defaultColor) => {
		globalCustomColor = '';
		customColor = '';
		globalCustomProperties = generateStylesheet();
		stylesheet.innerHTML = globalCustomProperties;
		customProperties = globalCustomProperties;
		$update();
	  }
	  const setCustomColor = (newColor) => {
		globalCustomColor = newColor;
		customColor = globalCustomColor;
		globalCustomProperties = generateStylesheet();
		stylesheet.innerHTML = globalCustomProperties;
		customProperties = globalCustomProperties;
		$update();
	  }
  
	  $onMounted(() => {
		if (!stylesheet) {
		  stylesheet = document.createElement('style');
		  document.head.appendChild(stylesheet);
		}
	  })
	  $on('pageInit', () => {
		let timeout;
		colorPicker = $f7.colorPicker.create({
		  inputEl: '#color-theme-picker',
		  targetEl: '#color-theme-picker-color',
		  value: {
			hex: themeColor,
		  },
		  on: {
			change(cp, value) {
			  clearTimeout(timeout);
			  timeout = setTimeout(function () {
				if (themeColor === value.hex) return;
				setCustomColor(value.hex);
			  }, 200);
			},
		  },
		});
	  });
	  $on('pageBeforeRemove', () => {
		colorPicker.destroy();
	  });
  
	  return $render;
	};
  
  </script> -->

<template>
	<div class="page">
	  <div class="navbar navbar-style-1 border-bottom">
		  <div class="navbar-inner">
			  <a href="#" class="link back">
				  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					  <path d="M0.439312 13.0606L5.75391 18.3752C6.04683 18.6682 6.43069 18.8146 6.81459 18.8146C7.1985 18.8146 7.58236 18.6682 7.87528 18.3752C8.46103 17.7894 8.46103 16.8397 7.87528 16.2539L5.12133 13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5H5.12133L7.87528 7.7461C8.46103 7.1603 8.46103 6.21057 7.87528 5.62477C7.28944 5.03898 6.33975 5.03898 5.75391 5.62477L0.439312 10.9394C-0.146437 11.5251 -0.146437 12.4749 0.439312 13.0606Z" fill="black"/>
				  </svg>
			  </a>
			  <div class="title">Color Themes</div>
		<div class="right">
				  <a href="#" class="link panel-open" data-panel="left">
					  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						  <path d="M3 8.40009V21.0001C3 21.2653 3.10536 21.5197 3.29289 21.7072C3.48043 21.8947 3.73478 22.0001 4 22.0001H20C20.2652 22.0001 20.5196 21.8947 20.7071 21.7072C20.8946 21.5197 21 21.2653 21 21.0001V8.40009C21.0001 8.23646 20.96 8.07531 20.8833 7.93077C20.8066 7.78623 20.6956 7.66273 20.56 7.5711L12.56 2.1711C12.3946 2.05932 12.1996 1.99959 12 1.99959C11.8004 1.99959 11.6054 2.05932 11.44 2.1711L3.44 7.5711C3.30443 7.66273 3.19342 7.78623 3.11671 7.93077C3.03999 8.07531 2.99992 8.23646 3 8.40009ZM14 20.0001H10V14.0001H14V20.0001ZM5 8.9321L12 4.2071L19 8.9321V20.0001H16V13.0001C16 12.7349 15.8946 12.4805 15.7071 12.293C15.5196 12.1055 15.2652 12.0001 15 12.0001H9C8.73478 12.0001 8.48043 12.1055 8.29289 12.293C8.10536 12.4805 8 12.7349 8 13.0001V20.0001H5V8.9321Z" fill="black"/>
					  </svg>
				  </a>
			  </div>
			  <div class="title-large">
				  <div class="title-large-text">Color Themes</div>
		  
			  </div>
		  </div>
	  </div>
	  <div class="page-content">
		<div class="block-title block-title-medium">Layout Themes</div>
		<div class="block block-strong">
		  <p>Framework7 comes with 2 main layout themes: Light (default) and Dark:</p>
		  <div class="row">
			<div class="col-50 bg-color-white demo-theme-picker"  
			on:click={()=>{setLayoutTheme="light"}}
			>
			  ${theme === 'light' && $h`
			  <label class="checkbox">
				<input type="checkbox" checked disabled />
				<i class="icon-checkbox"></i>
			  </label>
			  `}
			</div>
			<div class="col-50 bg-color-black demo-theme-picker"  on:click={()=>{setLayoutTheme="dark"}}>
			  ${theme === 'dark' && $h`
			  <label class="checkbox">
				<input type="checkbox" checked disabled />
				<i class="icon-checkbox"></i>
			  </label>
			  `}
			</div>
		  </div>
		</div>
	   
		<div class="block-title block-title-medium">Default Color Themes</div>
		<div class="block block-strong">
		  <p>Framework7 comes with ${colors.length} color themes set.</p>
		  <div class="row">
			${colors.map((color) => $h`
			<div class="col-33 medium-25 large-20">
			  <button class="button button-fill demo-color-picker-button button-round button-small color-${color}"
				@click=${()=>setColorTheme(color)}>${color}</button>
			</div>
			`)}
			<div class="col-33 medium-25 large-20"></div>
			<div class="col-33 medium-25 large-20"></div>
			<div class="col-33 medium-25 large-20"></div>
		  </div>
		</div>
		<div class="block-title block-title-medium">Custom Color Theme</div>
		<div class="list">
		  <ul>
			<li class="item-content item-input">
			  <div class="item-media align-self-flex-end">
				<div id="color-theme-picker-color"
				  style="width: 28px; height: 28px; border-radius: 4px; background: var(--f7-theme-color)"></div>
			  </div>
			  <div class="item-inner">
				<div class="item-label">HEX Color</div>
				<div class="item-input-wrap">
				  <input id="color-theme-picker" type="text" readonly placeholder="e.g. #ff0000" />
				</div>
			  </div>
			</li>
		  </ul>
		</div>
		<div class="block-title block-title-medium">Generated CSS Variables</div>
		<div class="block block-strong">
		  ${customProperties && $h`
		  <p>Add this code block to your custom stylesheet:</p>
		  <pre
			style="overflow: auto; -webkit-overflow-scrolling: touch; margin: 0; font-size: 12px;">${customProperties}</pre>
		  `}
		  ${!customProperties && $h`
		  <p>Change navigation bars styles or specify custom color to see custom CSS variables here</p>
		  `}
		</div>
	  </div>
	</div>
  </template>
  
  
  
<style>

</style>