<template>
<div id="kt_app_body" data-kt-app-header-fixed="true" data-kt-app-header-fixed-mobile="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" data-kt-app-sidebar-stacked="true" data-kt-app-sidebar-secondary-enabled="true" data-kt-app-toolbar-enabled="true" class="app-default">
	<!--begin::App-->
		<div class="d-flex flex-column flex-root app-root" id="kt_app_root">
			<!--begin::Page-->
			<div class="app-page flex-column flex-column-fluid" id="kt_app_page">
				<!--begin::Header-->
				<div id="kt_app_header" class="app-header" data-kt-sticky="true" data-kt-sticky-activate="{default: true, lg: true}" data-kt-sticky-name="app-header-minimize" data-kt-sticky-offset="{default: '200px', lg: '300px'}" data-kt-sticky-animation="false">
					<!--begin::Header container-->
					<div class="app-container container-fluid d-flex align-items-stretch flex-stack" id="kt_app_header_container">
						<!--begin::Header mobile-->
						<div class="d-flex align-items-center d-lg-none">
							<!--begin::Sidebar toggle-->
							<button id="kt_app_sidebar_mobile_toggle" class="btn btn-icon btn-color-gray-500 btn-active-color-primary ms-n4 me-1">
								<i class="ki-outline ki-burger-menu-6 fs-2x"></i>
							</button>
							<!--end::Sidebar toggle-->
							<!--begin::Logo-->
							<div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0 me-lg-15">
								<NuxtLink to="/">
									<img alt="Logo" src="/media/logos/demo62.svg" class="h-30px" />
								</NuxtLink>
							</div>
							<!--end::Logo-->
							<!--begin::Header mobile toggle-->
							<div class="d-flex align-items-center d-lg-none ms-2" title="Show sidebar menu">
								<div class="btn btn-icon btn-color-white bg-white bg-opacity-0 bg-hover-opacity-10 w-35px h-35px" id="kt_app_sidebar_mobile_toggle">
									<i class="ki-outline ki-abstract-14 fs-2"></i>
								</div>
							</div>
							<!--end::Header mobile toggle-->
						</div>
						<!--end::Header mobile-->
						<!--begin::Navbar wrapper-->
						<Header/>
						<!--end::Navbar wrapper-->
					</div>
					<!--end::Header container-->
				</div>
				<!--end::Header-->
				<!--begin::Wrapper-->
				<div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
					<!--begin::Sidebar-->
          <Navbar/>
					<!--end::Sidebar-->
					<!--begin::Main-->
					<div class="app-main flex-column flex-row-fluid" id="kt_app_main">
						<!--begin::Content wrapper-->
						<div class="d-flex flex-column flex-column-fluid">
						<slot/>
						</div>
						<!--end::Content wrapper-->
						<!--begin::Footer-->
						<div id="kt_app_footer" class="app-footer">
							<!--begin::Footer container-->
							<div class="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
								<!--begin::Copyright-->
								<div class="text-gray-900 order-2 order-md-1">
									<span class="text-muted fw-semibold me-1">2024&copy;</span>
									<NuxtLink to="https://keenthemes.com" target="_blank" class="text-gray-800 text-hover-primary">Keenthemes</NuxtLink>
								</div>
								<!--end::Copyright-->
								<!--begin::Menu-->
								<ul class="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
									<li class="menu-item">
										<NuxtLink to="https://keenthemes.com" target="_blank" class="menu-link px-2">About</NuxtLink>
									</li>
									<li class="menu-item">
										<NuxtLink to="https://devs.keenthemes.com" target="_blank" class="menu-link px-2">Support</NuxtLink>
									</li>
									<li class="menu-item">
										<NuxtLink to="https://1.envato.market/EA4JP" target="_blank" class="menu-link px-2">Purchase</NuxtLink>
									</li>
								</ul>
								<!--end::Menu-->
							</div>
							<!--end::Footer container-->
						</div>
						<!--end::Footer-->
					</div>
					<!--end:::Main-->
				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Page-->
		</div>
		<!--end::App-->
  </div>
</template>

<script setup>

</script>

<style>

</style>