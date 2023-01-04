<script>
	import {
		Header,
		HeaderUtilities,
		HeaderAction,
		HeaderPanelLinks,
		HeaderPanelDivider,
		HeaderPanelLink,
		SideNav,
		SideNavItems,
		SideNavMenu,
		SideNavMenuItem,
		SideNavLink,
		SkipToContent
	} from 'carbon-components-svelte';
	let isOpen = false;
	let isSideNavOpen = true;
</script>

<Header platformName="Quanpass" bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderUtilities>
		<HeaderAction bind:isOpen>
			<HeaderPanelLinks>
				<HeaderPanelDivider>Switcher subject 1</HeaderPanelDivider>
				<HeaderPanelLink>Switcher item 1</HeaderPanelLink>
				<HeaderPanelDivider>Switcher subject 2</HeaderPanelDivider>
				<HeaderPanelLink>Switcher item 1</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 2</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 3</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 4</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 5</HeaderPanelLink>
			</HeaderPanelLinks>
		</HeaderAction>
	</HeaderUtilities>
</Header>
<SideNav bind:isOpen={isSideNavOpen}>
	<SideNavItems>
		<SideNavLink text="Home" href="/" />
		<SideNavLink text="Market" href="/about" />
		<SideNavLink text="Robot" href="/site" />
		<SideNavMenu text="Menu">
			<SideNavMenuItem text="Message" href="/" />
		</SideNavMenu>
	</SideNavItems>
</SideNav>

<style>
</style>
