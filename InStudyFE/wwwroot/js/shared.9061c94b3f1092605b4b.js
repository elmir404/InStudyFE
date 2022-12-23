! function() {
	var e = {
			3644: function(e, t, i) {
				"use strict";
				var n = i(5175);
				! function() {
					const e = new n.Tracker(n.Product.GOOGLE_AD_MANAGER);
					class t {
						constructor(e) {
							window.googletag ? window.googletag.pubads && window.googletag.pubads() && (t.onTrackerLoadedTrackInitialisationStep("setup_can_start"), this.adTargeting = e, this.isSearch = window.location.pathname.includes("/search/"), this.configureAdManagerSettings()) : t.fireRollbarWarning("Google Ad Manager: AdConfigurationHandler did not find googletag.")
						}
						configureAdManagerSettings() {
							window.googletag.pubads().enableSingleRequest(), window.googletag.pubads().collapseEmptyDivs(), this.setTargeting(), this.checkIfInitialLoadDisableNeeded(), this.activateLazyLoad(), window.googletag.enableServices()
						}
						setTargeting() {
							this.adTargeting.forEach((e => {
								window.googletag.pubads().setTargeting(e.key, e.value)
							}))
						}
						checkIfInitialLoadDisableNeeded() {
							this.isSearch && (window.googletag.pubads().disableInitialLoad(), document.dispatchEvent(new Event("gam_loaded")))
						}
						activateLazyLoad() {
							window.googletag.pubads().enableLazyLoad({
								fetchMarginPercent: 70,
								renderMarginPercent: 35,
								mobileScaling: 1.5
							})
						}
						static onTrackerLoadedTrackInitialisationStep(e) {
							window.DatalakeEventTrackerLoaded ? t.trackInitialisationStep(e) : document.addEventListener("DatalakeEventTrackerLoaded", (() => {
								t.trackInitialisationStep(e)
							}), {
								once: !0
							})
						}
						static trackInitialisationStep(t) {
							const i = {
								action: n.Action.NON_INTERACTIVE,
								label: t
							};
							e.trackStructuredEvent(i)
						}
						static fireRollbarWarning(e) {
							window.Rollbar && Rollbar.warn(e)
						}
					}
					document.addEventListener("gam_start", (() => {
						t.onTrackerLoadedTrackInitialisationStep("setup_triggered")
					}), {
						once: !0
					}), document.addEventListener("gam_ready", (e => {
						e && e.detail && e.detail.targeting ? new t(e.detail.targeting) : t.fireRollbarWarning("Google Ad Manager: AdConfigurationHandler listener called with incomplete info.")
					}), {
						once: !0
					})
				}()
			},
			1368: function() {
				! function() {
					class e {
						constructor(e) {
							window.googletag ? window.googletag.pubads && window.googletag.pubads() && (this.adUnits = e, this.isSearch = window.location.pathname.includes("/search/"), this.isCountry = window.location.pathname.includes("/countries/"), this.topCount = 0, this.prepareSlots()) : AdConfigurationHandler.fireRollbarWarning("Google Ad Manager: AdConfigurationHandler did not find googletag.")
						}
						prepareSlots() {
							window.adSlots = {}, this.adUnits.forEach((e => {
								const t = this.getBareBoneAdSlot(e);
								this.enrichAdSlotWithSizeMapping(e, t), this.storeAdSlot(e, t)
							}))
						}
						getBareBoneAdSlot(e) {
							return window.googletag.defineSlot(`/21707809931/${e.code}`, e.dimensions, e.containerID).addService(window.googletag.pubads())
						}
						enrichAdSlotWithSizeMapping(e, t) {
							if (!this.isMappingNeededForThisSlot(e)) return;
							let i;
							const n = [this.getMappingIfAdvancedVisibilitySlotOnSearch, this.getMappingIfMobileAdvancedVisibilitySlotOnSearch, this.getMappingIfSecondTopVisibilitySlotOnSearch, this.getMappingIfTopVisibilitySlotOnCountryPage, this.getMappingIfMobileAdvancedVisibilitySlot, this.getDefaultSlotMapping];
							for (; !i;) i = n[0].bind(this)(e), n.shift();
							this.updateTopCount(e), this.wrapUpSizeMapping(i, t)
						}
						storeAdSlot(e, t) {
							const i = this.getSlotTypeForAdUnit(e),
								n = window.adSlots[i],
								r = void 0 !== n ? n : [];
							r.push(t), window.adSlots[i] = r
						}
						getMappingIfAdvancedVisibilitySlotOnSearch(e) {
							if (this.isAdvancedVisibilitySlotOnSearch(e)) return window.googletag.sizeMapping().addSize([1096, 0], [e.dimensions]).addSize([752, 0], []).addSize([743, 0], [e.dimensions])
						}
						getMappingIfMobileAdvancedVisibilitySlotOnSearch(e) {
							if (this.isMobileAdvancedVisibilitySlotOnSearch(e)) return window.googletag.sizeMapping().addSize([1096, 0], []).addSize([752, 0], [e.dimensions]).addSize([743, 0], []).addSize([352, 0], [e.dimensions])
						}
						getMappingIfSecondTopVisibilitySlotOnSearch(e) {
							if (this.isSecondTopVisibilitySlotOnSearch(e)) return window.googletag.sizeMapping().addSize([984, 0], [e.dimensions]).addSize([752, 0], []).addSize([648, 0], [e.dimensions])
						}
						getMappingIfTopVisibilitySlotOnCountryPage(e) {
							if (this.isTopVisibilitySlotOnCountryPage(e)) return window.googletag.sizeMapping().addSize([769, 0], 0 === this.topCount ? [e.dimensions] : []).addSize([332, 0], 1 === this.topCount ? [e.dimensions] : [])
						}
						getMappingIfMobileAdvancedVisibilitySlot(e) {
							if (this.isMobileAdvancedVisibilitySlot(e)) return window.googletag.sizeMapping().addSize([752, 0], []).addSize([352, 0], [e.dimensions])
						}
						getDefaultSlotMapping(e) {
							let t = 728;
							return this.isTopVisibilitySlot(e) && (t = 16 * this.topCount + 300 * (this.topCount + 1)), window.googletag.sizeMapping().addSize([32 + t, 0], [e.dimensions])
						}
						wrapUpSizeMapping(e, t) {
							e = e.addSize([0, 0], []).build(), t.defineSizeMapping(e)
						}
						updateTopCount(e) {
							this.isTopVisibilitySlot(e) && this.topCount++
						}
						getSlotTypeForAdUnit(e) {
							switch (e.dimensions[1]) {
								case 50:
									return "mobileAdvanced";
								case 90:
									return "advanced";
								case 100:
									return "standard";
								case 250:
									return "top";
								default:
									return ""
							}
						}
						isMappingNeededForThisSlot(e) {
							return 100 !== e.dimensions[1]
						}
						isTopVisibilitySlot(e) {
							return 250 === e.dimensions[1]
						}
						isMobileAdvancedVisibilitySlot(e) {
							return 50 === e.dimensions[1]
						}
						isAdvancedVisibilitySlotOnSearch(e) {
							return this.isSearch && 90 === e.dimensions[1]
						}
						isMobileAdvancedVisibilitySlotOnSearch(e) {
							return this.isSearch && 50 === e.dimensions[1]
						}
						isSecondTopVisibilitySlotOnSearch(e) {
							return this.isSearch && 250 === e.dimensions[1] && 1 === this.topCount
						}
						isTopVisibilitySlotOnCountryPage(e) {
							return this.isCountry && 250 === e.dimensions[1]
						}
						static fireRollbarWarning(e) {
							window.Rollbar && Rollbar.warn(e)
						}
					}
					document.addEventListener("gam_ready", (t => {
						t && t.detail && t.detail.units ? new e(t.detail.units) : e.fireRollbarWarning("Google Ad Manager: AdSlotHandler listener called with incomplete info.")
					}), {
						once: !0
					})
				}()
			},
			7066: function(e, t, i) {
				"use strict";
				i(7360), i(9762), i(4028)
			},
			723: function(e, t, i) {
				"use strict";
				i(2270), i(7066), i(7360), i(6329)
			},
			1347: function(e, t, i) {},
			5448: function(e, t, i) {
				"use strict";
				var n = i(8328);
				class r {
					constructor() {
						this.name = "CookiesAreFineWithMe", this.ttl = 31536e3
					}
					init() {
						this.wrapper = document.getElementById("CookieWall"), this.wrapper && (window.Loot && window.Loot.DataStorage && window.Loot.DataStorage.retrieve(this.name) || this.showCookieWall(), this.checkUserSession())
					}
					checkUserSession() {
						"undefined" != typeof EventAggregationService && (EventAggregationService.subscribeTo(n.SessionCreatedEvent.EventType, {
							notify: () => {
								this.closeCookieWall()
							}
						}), EventAggregationService.subscribeTo(n.SessionServiceReadyEvent.EventType, {
							notify: e => {
								this.onSessionServiceReady(e.sessionService)
							}
						}, !0))
					}
					async onSessionServiceReady(e) {
						null !== await e.getSession() && this.closeCookieWall()
					}
					showCookieWall() {
						this.wrapper.classList.remove("Hidden");
						const e = this.wrapper.querySelector("#CookieButton");
						e && e.addEventListener("click", (() => {
							this.closeCookieWall()
						}))
					}
					closeCookieWall() {
						this.wrapper.classList.add("Hidden"), window.Loot && window.Loot.DataStorage && Loot.DataStorage.store(this.name, !0, this.ttl)
					}
				}
				document.addEventListener("DOMContentLoaded", (() => {
					(new r).init()
				}))
			},
			9601: function() {
				! function() {
					"use strict";
					const e = document.getElementById("CountrySpotlight");
					if (e) {
						let t = e.querySelectorAll("#CountrySpotlightContainer>figure");
						t = Array.from(t).sort((() => Math.random() - .5));
						for (let e = 0; e < t.length; e++) {
							let i = t[e];
							e < 5 ? document.getElementById("CountrySpotlightContainer").insertBefore(i, null) : i.remove()
						}
					}
				}()
			},
			1454: function(e, t, i) {
				"use strict";
				var n = i(8328);
				class r {
					constructor() {
						this.drawer = document.getElementById("wishlistDrawer"), void 0 !== this.drawer && (this.drawerContent = this.drawer.querySelector("#wishlistDrawerContent"), this.drawerTitle = this.drawer.querySelector("#wishlistDrawerTitle"), this.closeButton = this.drawer.querySelector(".CloseButton"), this.wishlistWrapper = this.drawerContent.querySelector(".WishlistWrapper"), this.comparisonWrapper = this.drawerContent.querySelector(".ComparisonToolWrapper"), this.authServiceWrapper = this.drawerContent.querySelector(".AuthServiceWrapper"), this.backToWishlist = this.drawerContent.querySelector("#backToWishlist"), this.init())
					}
					init() {
						this.attachListeners()
					}
					attachListeners() {
						document.addEventListener("openWishlistDrawer", this.openDrawer.bind(this)), document.addEventListener("closeWishlistDrawer", this.closeDrawer.bind(this)), document.addEventListener("load_comparison", (() => {
							this.switchMode("Comparing")
						})), document.addEventListener("show_auth_service_in_wishlist", this.triggerAuthenticationService.bind(this)), this.backToWishlist.addEventListener("click", (() => {
							this.switchMode("Wishlist"), document.dispatchEvent(new Event("close_comparison")), this.trackBackToWishlist("Comparison", "return_to_wishlist")
						})), this.closeButton.addEventListener("click", (() => {
							document.dispatchEvent(new Event("closeWishlistDrawer"))
						})), this.drawer.addEventListener("click", (e => {
							this.drawer === e.target && document.dispatchEvent(new Event("closeWishlistDrawer"))
						}))
					}
					openDrawer() {
						this.drawer.classList.add("Opened"), document.body.setAttribute("data-wishlist-drawer", ""), requestAnimationFrame((() => {
							this.drawer.classList.add("Animate")
						}))
					}
					closeDrawer() {
						this.drawer.classList.remove("Animate"), document.body.removeAttribute("data-wishlist-drawer"), setTimeout((() => {
							this.drawer.classList.remove("Opened")
						}), 400)
					}
					switchMode(e) {
						if (this.drawerContent) switch (e) {
							case "Wishlist":
								this.wishlistMode();
								break;
							case "Comparing":
								this.compareMode();
								break;
							default:
								this.registerMode()
						}
					}
					wishlistMode() {
						this.drawerTitle.innerText = "Wishlist", this.comparisonWrapper.classList.add("Hidden"), this.authServiceWrapper.classList.add("Hidden"), this.wishlistWrapper.classList.remove("Hidden"), this.drawerContent.classList.remove("ComparisonMode")
					}
					compareMode() {
						this.drawerTitle.innerText = "Comparing", this.wishlistWrapper.classList.add("Hidden"), this.authServiceWrapper.classList.add("Hidden"), this.comparisonWrapper.classList.remove("Hidden"), this.drawerContent.classList.add("ComparisonMode")
					}
					registerMode() {
						this.wishlistWrapper.classList.add("Hidden"), this.comparisonWrapper.classList.add("Hidden"), this.authServiceWrapper.classList.remove("Hidden"), this.drawerContent.classList.remove("ComparisonMode")
					}
					trackBackToWishlist(e, t) {
						window.ga && ga("send", "event", e, t), window.snowplow && snowplow("trackStructEvent", {
							category: e,
							action: t
						})
					}
					triggerAuthenticationService() {
						if ("true" !== sessionStorage.getItem("LoggedInStatus")) {
							const e = this.authServiceWrapper.querySelector(".AuthPlaceholder").getAttribute("data-service-url");
							if (!e) return;
							Loot.MicroserviceInjector.injectScriptToBody(e).then((() => {
								if (window.dispatchEvent(new CustomEvent("ShowAuth", {
										detail: {
											incentive: "Wishlist"
										}
									})), this.switchMode("Register"), void 0 === window.EventAggregationService) return;
								const e = this;
								EventAggregationService.subscribeTo(n.SessionCreatedEvent.EventType, {
									notify() {
										e.switchMode("Wishlist")
									}
								})
							}))
						}
					}
				}
				window.addEventListener("DOMContentLoaded", (() => {
					new r
				}))
			},
			266: function() {
				document.addEventListener("DOMContentLoaded", (function() {
					"use strict";
					({
						init() {
							const e = this;
							this.disciplinesList = document.querySelectorAll("#DisciplineSpotlight ul")[0], void 0 !== this.disciplinesList && (this.disciplinesToggle = document.querySelectorAll(".ShowMoreDisciplines")[0], this.expandedString = this.disciplinesToggle.getAttribute("data-expanded"), this.condensedString = this.disciplinesToggle.getAttribute("data-condensed"), this.disciplinesToggle.addEventListener("click", (function() {
								e._toggleAllDisciplines(e.disciplinesList)
							})))
						},
						_toggleAllDisciplines(e) {
							e.classList.toggle("is-Expanded"), this._changeToggleText()
						},
						_changeToggleText() {
							if (this.disciplinesList.classList.contains("is-Expanded")) return this.disciplinesToggle.innerHTML = this.expandedString, void(window.history && window.history.pushState && history.pushState("", document.title, window.location.pathname));
							this.disciplinesToggle.innerHTML = this.condensedString, location.hash = "#DisciplineSpotlight"
						}
					}).init()
				}))
			},
			1483: function() {
				const e = {
					favouriteIcons: null,
					favouriteLength: null,
					counterInitiated: null,
					wishlistService: null,
					init: () => {
						e.favouriteIcons = [], e.favouriteLength = window.Loot && window.Loot.DataStorage && window.Loot.DataStorage.retrieve("FavouriteCounter/Count") || 0, e.counterInitiated = !1, e.wishlistService = {}, e.getFavouriteIcons(), e.subscribeToHeaderUpdatedEvent(), e.subscribeToWishlistServiceReadyEvent(), e.favouriteLength > 0 && e.revealAnimation()
					},
					subscribeToHeaderUpdatedEvent: () => {
						document.addEventListener("header_login_updated", (() => {
							e.wishlistServiceReady() && (e.getFavouriteIcons(), e.animate())
						}))
					},
					getFavouriteIcons: () => {
						const t = document.querySelectorAll(".WishlistIcon");
						e.favouriteIcons = Array.from(t)
					},
					subscribeToWishlistServiceReadyEvent: () => {
						e.wishlistServiceReady() && (e.wishlistUpdateListeners(), e.animate()), void 0 !== window.EventAggregationService && window.EventAggregationService.subscribeToWishlistServiceReadyEvent({
							notify: () => {
								e.wishlistService = window.wishlistService, e.wishlistUpdateListeners(), e.animate()
							}
						})
					},
					wishlistServiceReady: () => void 0 !== window.wishlistService && (e.wishlistService = window.wishlistService, !0),
					wishlistUpdateListeners: () => {
						const t = {
							notify: () => {
								e.animate()
							}
						};
						window.EventAggregationService.subscribeToFavouriteAddedEvent(t), window.EventAggregationService.subscribeToFavouriteRemovedEvent(t)
					},
					animate: async () => {
						const t = e.favouriteLength;
						await e.loadFavouritesCount(), t !== e.favouriteLength && (e.favouriteLength > 0 ? e.animateCounters() : e.hideCounterPlaceHolders())
					},
					loadFavouritesCount: async () => {
						const t = await e.wishlistService.getWishlist();
						e.favouriteLength = t.favourites.length, window.Loot && window.Loot.DataStorage && Loot.DataStorage.store("FavouriteCounter/Count", e.favouriteLength, 86400)
					},
					animateCounters: () => {
						e.activateHeartbeat(), e.counterInitiated ? e.additionalAnimation() : e.revealAnimation()
					},
					hideCounterPlaceHolders: () => {
						for (let t = 0; t < e.favouriteIcons.length; t++) {
							let i = e.favouriteIcons[t].querySelector("span");
							i && i.classList.add("Hidden")
						}
						e.counterInitiated = !1
					},
					activateHeartbeat: () => {
						e.favouriteIcons.forEach((e => {
							e.classList.add("HeartBeat"), e.addEventListener("animationend", (() => {
								e.classList.remove("HeartBeat")
							}))
						}))
					},
					placeCounterPlaceHolderInIcon: (e, t) => {
						const i = e.querySelector(".WishlistCounter p");
						null === i ? e.insertAdjacentHTML("beforeend", `<span class="WishlistCounter Hidden"><p>${t}</p></span>`) : i.innerText = t
					},
					revealAnimation: () => {
						for (let t = 0; t < e.favouriteIcons.length; t++) e.placeCounterPlaceHolderInIcon(e.favouriteIcons[t], e.favouriteLength), e.unhideCounterPlaceholder(e.favouriteIcons[t]), e.favouriteIcons[t].classList.remove("NotEmpty"), e.favouriteIcons[t].classList.add("Empty");
						e.counterInitiated = !0
					},
					additionalAnimation: () => {
						for (let t = 0; t < e.favouriteIcons.length; t++) e.favouriteIcons[t].classList.remove("Empty"), e.favouriteIcons[t].classList.add("NotEmpty"), setTimeout((() => {
							e.placeCounterPlaceHolderInIcon(e.favouriteIcons[t], e.favouriteLength), e.unhideCounterPlaceholder(e.favouriteIcons[t])
						}), 300), setTimeout((() => {
							e.favouriteIcons[t].classList.remove("NotEmpty")
						}), 600)
					},
					unhideCounterPlaceholder: e => {
						const t = e.querySelector("span");
						t && t.classList.remove("Hidden")
					}
				};
				document.addEventListener("DOMContentLoaded", (() => {
					e.init()
				}))
			},
			2032: function(e, t, i) {
				"use strict";
				var n = i(1937);
				! function() {
					const e = new n.AuthService,
						t = Array.from(document.getElementsByClassName("HeaderToggleItem"));
					if (0 === t.length) return;
					const i = Array.from(document.getElementsByClassName("HeaderToggleContent"));
					if (i.length !== t.length) return;
					const r = document.getElementById("HeaderToggle");

					function o() {
						if (void 0 === window.AuthController) return !1;
						let e = !1;
						return e = window.AuthController.isLoggedIn(), e
					}

					function s(e) {
						return null !== e.querySelector("i.lnr-user")
					}

					function a() {
						i.forEach((e => {
							e.classList.remove("InView")
						})), t.forEach((e => {
							e.classList.remove("InView")
						}))
					}
					r && (Array.from(t).forEach((e => r.insertBefore(e, null))), Array.from(t).forEach((n => {
						let c = !1;
						if (r.appendChild(n), n.classList.add("MobileOnlyBlock"), n.classList.remove("Hidden"), c = o(), c && s(n)) {
							let e = n.querySelector("i.lnr-user");
							e.classList.remove("lnr-user"), e.classList.add("lnr-user-full")
						} else window.AuthController.subscribe((function(e, t) {
							if (t && !0 === t.LoggedInStatus && s(n)) {
								let e = n.querySelector("i.lnr-user");
								e.classList.remove("lnr-user"), e.classList.add("lnr-user-full")
							}
						}));
						n.addEventListener("click", (function() {
							let n = !1,
								r = o();
							this.classList.contains("js-user") && window.AuthController.subscribe((function(t, i) {
								null !== t || !1 !== i.LoggedInStatus || e.triggerIncentive("third_party_login", "Header")
							})), this.classList.contains("js-preferences") || this.classList.contains("js-wishlistButton") || (this.classList.contains("InView") && (n = !0), a(), n || (this.classList.add("InView"), this.classList.contains("js-user") && r && document.querySelector(".AccountModule").classList.add("InView"), i[t.indexOf(this)].classList.add("InView")))
						}))
					})), document.addEventListener("click", (function(e) {
						e.target.closest(".HeaderToggleContent") || e.target.closest(".HeaderToggleItem") || a()
					})), document.addEventListener("url_change", (() => {
						a()
					})))
				}()
			},
			1937: function(e, t, i) {
				"use strict";
				i.d(t, {
					AuthService: function() {
						return n
					}
				});
				class n {
					constructor() {
						this.headerFlyOut = null, this.headerFlyoutInitialized = !1, this.headerIncentiveMounted = !1
					}
					triggerIncentive(e, t) {
						"Header" === t && (this.headerFlyoutInitialized || (this.headerFlyOut = document.getElementById("HeaderFlyoutWrapper"), this.setFinishListeners(), this.headerFlyoutInitialized = !0), this.toggleHeaderFlyOut()), document.dispatchEvent(new CustomEvent("RenderAuthenticationService", {
							detail: {
								referrer: t,
								tabToShow: e
							}
						}))
					}
					toggleHeaderFlyOut() {
						null !== this.headerFlyOut && (document.addEventListener("auth_layout_mounted", (e => {
							"Header" === e.detail.layout && (this.headerFlyOut.classList.toggle("is-open"), this.headerIncentiveMounted = !0)
						})), this.headerIncentiveMounted && this.headerFlyOut.classList.toggle("is-open"))
					}
					setFinishListeners() {
						document.addEventListener("opt_in_success", (() => {
							this.closeHeaderFlyOut()
						})), document.addEventListener("opt_out", (() => {
							this.closeHeaderFlyOut()
						})), document.addEventListener("opt_in_fail", (() => {
							this.closeHeaderFlyOut()
						})), document.addEventListener("logging_in_existing_user", (() => {
							document.addEventListener("student_logged_in", (() => {
								this.closeHeaderFlyOut()
							}))
						}))
					}
					closeHeaderFlyOut() {
						null !== this.headerFlyOut && this.headerFlyOut.classList.remove("is-open")
					}
				}
			},
			243: function(e, t, i) {
				"use strict";
				var n, r = i(2270),
					o = i(1937),
					s = i(8328),
					a = i(7312),
					c = i(4527);
				n = {
					headerLogin: null,
					loggedInStatus: !1,
					anonymousStudent: null,
					loggedInMenuVisible: !1,
					sessionService: null,
					auth: null,
					authService: new o.AuthService,
					init() {
						if (r.default.GA.parseTrackers(void 0), this.headerLogin = document.getElementById("HeaderLogin"), void 0 === this.headerLogin) return;
						const e = document.getElementById("LoginButton"),
							t = document.getElementsByClassName("js-wishlistButton");
						this.injectHeaderLoginElement() && e.addEventListener("click", (function() {
							n.authService.triggerIncentive("third_party_login", "Header")
						})), Array.from(t).forEach((e => {
							e.addEventListener("click", (() => {
								this.wishlistClickHandler()
							}))
						})), this.addEventListeners(), this.showProfileIntroductionIcon()
					},
					injectHeaderLoginElement() {
						const e = document.getElementById("SearchRowWrapper");
						if (null === e) return !1;
						const t = document.createElement("div");
						t.id = "HeaderFlyoutWrapper";
						const i = document.getElementById("AuthHeaderPlaceholder");
						return null !== i && (t.appendChild(i), e.appendChild(t), this.adjustMobileFlyoutHeight(t), !0)
					},
					adjustMobileFlyoutHeight(e) {
						r.default.breakpoints(["Small", "Medium"], (() => {
							const t = document.getElementById("SearchRow");
							t && window.addEventListener("resize", (() => {
								const i = window.innerHeight,
									n = t.clientHeight;
								e.style.maxHeight = `calc(${i-n}px - 1rem)`
							}))
						}))
					},
					addEventListeners() {
						const e = this;
						void 0 !== window.EventAggregationService && (window.EventAggregationService.subscribeTo(s.SessionServiceReadyEvent.EventType, {
							async notify(t) {
								e.sessionService = t.sessionService, await e.updateMenuWhenApplicable()
							}
						}, !0), window.EventAggregationService.subscribeTo(a.AnonymousStudentServiceReady.EventType, {
							async notify(t) {
								e.anonymousStudent = t.anonymousStudentService, await e.updateMenuWhenApplicable()
							}
						}, !0), window.EventAggregationService.subscribeTo(a.AnonymousStudentProfileSynced.EventType, {
							async notify() {
								await e.updateMenuWhenApplicable()
							}
						}), window.EventAggregationService.subscribeTo(a.AnonymousStudentStateChanged.EventType, {
							async notify() {
								await e.updateMenuWhenApplicable()
							}
						}), window.EventAggregationService.subscribeTo(a.AnonymousStudentProfileUpdated.EventType, {
							notify(t) {
								t.state === a.StudentRepositoryStateType.ONLINE && t.changes[c.StudentField.FIRST_NAME] && e.updateName(t.changes[c.StudentField.FIRST_NAME])
							}
						}))
					},
					async updateMenuWhenApplicable() {
						null !== this.sessionService && null !== this.anonymousStudent && (null !== await this.sessionService.getSession() ? await this.onLogin() : this.headerLogin.classList.remove("Hidden"))
					},
					async onLogin() {
						this.loggedInStatus = !0;
						const e = await window.AnonymousStudent.getStudentData([c.StudentField.FIRST_NAME]);
						this.loggedInMenuVisible || this.requestMenu(e), this.updateName(e.first_name || "")
					},
					wishlistClickHandler() {
						this.trackEntryPointClick(), this.conditionallyOpenTheWishlist()
					},
					trackEntryPointClick() {
						"undefined" != typeof snowplow && snowplow("trackStructEvent", {
							category: "Wishlisting",
							action: "view_wishlist_header"
						}), r.default.GA.fireTracker({
							category: "Wishlisting",
							action: "view_wishlist_header"
						})
					},
					conditionallyOpenTheWishlist() {
						n.loggedInStatus ? document.dispatchEvent(new Event("openWishlistDrawer")) : (n.authService.triggerIncentive("third_party_login", "FavouriteStudy"), this.trackIncentiveImpression(), this.waitForRegistration())
					},
					trackIncentiveImpression() {
						"undefined" != typeof snowplow && snowplow("trackStructEvent", {
							category: "Profile",
							action: "Register Incentive Click",
							label: "View wishlist header"
						}), r.default.GA.fireTracker({
							category: "Wishlisting",
							action: "Register Incentive Click",
							label: "View wishlist header"
						})
					},
					waitForRegistration() {
						void 0 !== window.EventAggregationService && window.EventAggregationService.subscribeTo(s.SessionCreatedEvent.EventType, {
							notify() {
								document.dispatchEvent(new Event("openWishlistDrawer"))
							}
						})
					},
					updateName(e) {
						const t = document.getElementById("HeaderLogin"),
							i = document.getElementById("HeaderLoggedIn"),
							n = i.getElementsByClassName("LoggedInUserText")[0];
						(void 0 !== t && void 0 !== i || 0 != n.length) && (n.innerHTML = e)
					},
					requestMenu(e) {
						const t = document.getElementById("HeaderLogin"),
							i = document.getElementById("HeaderLoggedIn"),
							n = i.getElementsByClassName("LoggedInUserText")[0];
						if (void 0 !== t && void 0 !== i || 0 != n.length) {
							this.loggedInMenuVisible = !0, this.updateName(e.first_name || ""), t.classList.add("Hidden"), i.classList.remove("Hidden"), document.dispatchEvent(new Event("header_login_updated"));
							const n = document.getElementsByClassName("js-wishlistButton");
							Array.from(n).forEach((e => {
								e.addEventListener("click", (() => {
									this.wishlistClickHandler()
								}))
							})), void 0 !== e.first_name && document.getElementById("LoggedInToggle").addEventListener("click", (function() {
								document.getElementById("LoggedInDropDown").classList.toggle("Selected")
							}));
							var r = i.querySelector("#signOutLink");
							null == r || r.addEventListener("click", this.signOut)
						}
					},
					async signOut(e) {
						if (e.preventDefault(), void 0 === window.AuthenticationService) throw new Error("Couldn't find AuthenticationService");
						await window.AuthenticationService.logout()
					},
					showProfileIntroductionIcon() {
						const e = document.querySelectorAll(".ProfilePageIntroductionIcon");
						0 !== e.length && this.canShowNotificationIcon() && e.forEach((e => {
							e.classList.remove("Hidden")
						}))
					},
					canShowNotificationIcon() {
						if (!window.Loot || !window.Loot.DataStorage) return !1;
						const e = Loot.DataStorage.retrieve("ProfilePageIntroductionShown");
						return "/account/" !== window.location.pathname && !0 !== e
					}
				}, document.addEventListener("DOMContentLoaded", (function() {
					n.init()
				}))
			},
			1497: function() {
				window.ProfilePageIntroductionConditionsInformer = {
					areConditionsMet() {
						return !this.elementSeenBefore()
					},
					triggerAfterYoloRegistration(e) {
						this.areConditionsMet() && document.addEventListener("student-registered", (t => {
							void 0 !== t.detail && "Google" === t.detail.provider && e()
						}), {
							once: !0
						})
					},
					elementSeenBefore() {
						return !(!window.Loot || !window.Loot.DataStorage) && !0 === Loot.DataStorage.retrieve("ProfilePageIntroductionShown")
					}
				}
			},
			2228: function() {
				window.ProfilePageIntroductionElementProvider = {
					element: null,
					getElement() {
						if (this.element || (this.element = document.querySelector('.js-slideInElement[data-name="ProfilePageIntroduction"]'), this.element)) return this.element
					}
				}
			},
			1657: function() {
				window.ProfilePageIntroductionInitiator = {
					initiator: null,
					element: null,
					init() {
						this.neededElementsAvailable() && this.initiateProfilePageIntroduction()
					},
					neededElementsAvailable() {
						return !!(window.ProfilePageIntroductionElementProvider && window.ProfilePageIntroductionConditionsInformer && window.SlideInElementFrameInitiator) && (this.initiator = new SlideInElementFrameInitiator, this.element = ProfilePageIntroductionElementProvider.getElement(), !!this.element)
					},
					initiateProfilePageIntroduction() {
						const e = this.element.querySelector(".SlideInElementContentWrapper");
						e && (e.addEventListener("click", (() => {
							const e = this.buildUrl();
							window.location = e
						})), ProfilePageIntroductionConditionsInformer.triggerAfterYoloRegistration((() => {
							this.initiator.trigger(this.element), Loot.DataStorage.store("ProfilePageIntroductionShown", !0, 2592e3)
						})))
					},
					buildUrl() {
						return new URL(window.location).origin + "/account/?section=recommendations"
					}
				}, document.addEventListener("DOMContentLoaded", (() => {
					ProfilePageIntroductionInitiator.init()
				}))
			},
			8661: function(e, t, i) {
				"use strict";
				i.r(t), i.d(t, {
					SlideInElementFramePositioner: function() {
						return n
					}
				});
				class n {
					constructor(e) {
						this.initiator = e
					}
					positionElement(e) {
						this.element = e;
						const t = this.getContextualElements();
						this.updatePosition(t), this.prepareForContextualChanges(t), this.prepareCrossClose(), this.showElement()
					}
					getContextualElements() {
						const e = this.initiator.contextualInformer.getContextualElements(),
							t = this.initiator.contextualInformer.getCurrentPage();
						return e.filter((e => !e.pages.length || e.pages.includes(t)))
					}
					updatePosition(e) {
						const t = this.getElementPosition(e),
							i = this.element.parentNode;
						let n = 12;
						window.innerWidth > 480 && (n = 24), i.style.bottom = t.vertical ? `${n+t.vertical}px` : null, i.style.right = t.horizontal ? `${n+t.horizontal}px` : null
					}
					getElementPosition(e) {
						let t = {
							horizontal: 0,
							vertical: 0
						};
						return e.forEach((e => {
							if (!e.element.isActive()) return;
							const i = document.querySelector(e.element.selector);
							let n = e.element.extraOffset ? e.element.extraOffset : 0;
							"horizontal" === e.motion.direction ? n += window.innerWidth - i.offsetLeft : n += window.innerHeight - i.offsetTop, n > t[e.motion.direction] && (t[e.motion.direction] = n)
						})), t
					}
					prepareForContextualChanges(e) {
						e.forEach((t => {
							t.listeners.forEach((i => {
								var n;
								switch (i.selector) {
									case "window":
										n = window;
										break;
									case "document":
										n = document;
										break;
									default:
										n = document.querySelector(i.selector)
								}
								n && n.addEventListener(i.action, (() => {
									setTimeout((() => {
										this.updatePosition(e)
									}), t.motion.timing)
								}))
							}))
						}))
					}
					prepareCrossClose() {
						const e = this.element.querySelector(".js-slideInElementCross");
						e && e.addEventListener("click", (() => {
							this.initiator.tracker.fireTracking(this.element.dataset.name, "CloseClick"), this.hideElement()
						}))
					}
					switchElement(e) {
						this.element.classList["Shown" === e ? "add" : "remove"]("SlideInElementShown"), this.initiator.tracker.fireTracking(this.element.dataset.name, `Element${e}`), document.dispatchEvent(new CustomEvent(`SlideInElement${e}`, {
							detail: {
								name: this.element.dataset.name
							}
						}))
					}
					showElement() {
						this.initiator.positioner.switchElement("Shown")
					}
					hideElement() {
						this.initiator.positioner.switchElement("Hidden")
					}
				}
				window.SlideInElementFramePositioner = n
			},
			206: function(e, t, i) {
				"use strict";
				i.r(t), i.d(t, {
					SlideInElementTracker: function() {
						return n
					}
				});
				class n {
					constructor(e) {
						this.initiator = e
					}
					fireTracking(e, t) {
						let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
							n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
						window.snowplow && window.snowplow("trackStructEvent", {
							category: "SlideInElement",
							action: e,
							label: t,
							property: i,
							value: n
						})
					}
				}
				window.SlideInElementTracker = n
			},
			3685: function(e, t, i) {
				"use strict";
				i.r(t), i.d(t, {
					SlideInElementConditionsInformer: function() {
						return n
					}
				});
				class n {
					constructor(e) {
						this.initiator = e
					}
					areConditionsMet() {
						return this.noElementVisible()
					}
					noElementVisible() {
						return null === document.querySelector(".SlideInElement.SlideInElementShown")
					}
				}
				window.SlideInElementConditionsInformer = n
			},
			8416: function(e, t, i) {
				"use strict";
				i.r(t), i.d(t, {
					SlideInElementContextualInformer: function() {
						return n
					}
				});
				class n {
					constructor(e) {
						this.initiator = e
					}
					getContextualElements() {
						return [this.getCookieWall(), this.getWishlistDrawer(), this.getStudyPageBottomBanner(), this.getStudyPageBottomBannerTooltip(), this.getArticleSidebar()]
					}
					getCurrentPage() {
						const e = window.location.pathname.split("/");
						if (!(e.length < 2)) return e[1]
					}
					getCookieWall() {
						return {
							element: {
								selector: "#CookieWall",
								isActive: () => {
									const e = document.getElementById("CookieWall");
									return !!e && !1 === e.classList.contains("Hidden")
								}
							},
							pages: [],
							listeners: [{
								selector: "#CookieButton",
								action: "click"
							}, {
								selector: "window",
								action: "scroll"
							}],
							motion: {
								direction: "vertical",
								timing: 0
							}
						}
					}
					getWishlistDrawer() {
						return {
							element: {
								selector: "#wishlistDrawer.Opened #wishlistDrawerContent",
								isActive: () => null !== document.querySelector("#wishlistDrawer.Opened")
							},
							pages: [],
							listeners: [{
								selector: "document",
								action: "openWishlistDrawer"
							}, {
								selector: "document",
								action: "closeWishlistDrawer"
							}],
							motion: {
								direction: "horizontal",
								timing: 400
							}
						}
					}
					getStudyPageBottomBanner() {
						return {
							element: {
								selector: "#FixedEssentialInformation",
								isActive: () => null !== document.querySelector("#FixedEssentialInformation.is-inView") && this.isMobileBreakpoint()
							},
							pages: ["studies"],
							listeners: [{
								selector: "window",
								action: "scroll"
							}, {
								selector: "window",
								action: "resize"
							}],
							motion: {
								direction: "vertical",
								timing: 300
							}
						}
					}
					getStudyPageBottomBannerTooltip() {
						return {
							element: {
								selector: "#FixedEssentialInformation",
								extraOffset: 72,
								isActive: () => {
									const e = document.getElementById("FixedEssentialInformation"),
										t = document.querySelector(".Tooltip.Guidance");
									return e && this.isMobileBreakpoint() && t && "none" !== t.style.display
								}
							},
							pages: ["studies"],
							listeners: [{
								selector: ".Tooltip.Guidance .TooltipCloseIcon",
								action: "click"
							}, {
								selector: "window",
								action: "scroll"
							}],
							motion: {
								direction: "vertical",
								timing: 300
							}
						}
					}
					getArticleSidebar() {
						return {
							element: {
								selector: "#StudySearchOnArticlePage",
								isActive: () => {
									const e = document.getElementById("StudySearchOnArticlePage");
									return !!e && "fixed" === window.getComputedStyle(e).position
								}
							},
							pages: ["articles"],
							listeners: [{
								selector: "window",
								action: "scroll"
							}],
							motion: {
								direction: "vertical",
								timing: 0
							}
						}
					}
					isMobileBreakpoint() {
						return Shared.breakpoints(["Small", "Medium"])
					}
				}
				window.SlideInElementContextualInformer = n
			},
			8845: function(e, t, i) {
				"use strict";
				var n = i(2270);
				const r = function() {
					const e = {
						button: null,
						init() {
							"serviceWorker" in navigator && (this.button = document.querySelector("#AddToHomeScreen"), this.button && (this.button.style.display = "none", this.installScript()))
						},
						installScript() {
							navigator.serviceWorker.register(`${n.default.getBaseUrl()}Offline.js`, {
								scope: "/"
							}).then((() => {
								window.addEventListener("beforeinstallprompt", (e => {
									this.promptInstallBanner(e)
								})), !1 === navigator.onLine && (window.ga || window.snowplow) && (ga("send", "event", {
									eventCategory: "Online Status",
									eventAction: navigator.onLine.toString()
								}), window.snowplow("trackStructEvent", {
									category: "Online Status",
									action: navigator.onLine.toString(),
									value: 10
								}))
							})).catch((function(e) {}))
						},
						promptInstallBanner(e) {
							e.preventDefault(), this.button.style.display = "block", this.button.addEventListener("click", (() => {
								e.prompt(), this.button.style.display = "none", e.userChoice.then((t => {
									const i = window.location.href;
									(window.ga || window.snowplow) && (ga("send", "event", {
										eventCategory: "PWA Install Prompt",
										eventAction: t.outcome,
										eventLabel: i
									}), window.snowplow("trackStructEvent", {
										category: "PWA Install Prompt",
										action: t.outcome,
										label: i,
										value: 10
									})), e = null
								}))
							}))
						}
					};
					return {
						init() {
							e.init()
						}
					}
				}();
				document.addEventListener("DOMContentLoaded", (() => {
					r.init()
				}))
			},
			4028: function(e, t, i) {
				"use strict";
				i(2270).default.live = !0;
				var n = void 0 === n || null == n ? {} : n;
				n.Search = void 0 === n.Search || null == n.Search ? {} : n.Search, n.Search.apiUrl = "https://search.prtl.co/2018-07-23/", n.Search.proxyUrl = "https://1cna6fszvk.execute-api.eu-west-1.amazonaws.com/prod", n.autoCompleteURL = "https://autocomplete.prtl.co/", n.snowplow = {
					app_id: "prod",
					collectorSubdomain: "collect"
				}
			},
			9762: function(e, t, i) {},
			9673: function(e, t, i) {
				"use strict";
				i.d(t, {
					checkNamespace: function() {
						return r
					}
				});
				var n = window.StudyPortals || {};
				const r = function(e) {
					let t, i = e.split("."),
						r = n;
					"StudyPortals" === i[0] && (i = i.slice(1)), t = i.length;
					let o = !0;
					for (let e = 0; e < t; e++) void 0 === r[i[e]] && (o = !1, e = t), r = r[i[e]];
					return o
				}
			},
			7360: function(e, t) {
				"use strict";
				let i = {
					aliases: {
						activated: "act",
						active: "ac",
						affiliate: "fflt",
						allow: "al",
						application_partners: "ap",
						approval: "apl",
						area_ids: "ae",
						area_presence: "aep",
						article_ids: "ar",
						assistant_ids: "ai",
						auditor_ids: "au",
						banner_boxes: "bb",
						banner_ids: "ba",
						body_ids: "bo",
						brand: "br",
						cae_max: "caex",
						cae_min: "caem",
						campaign_ids: "cam",
						capped_budget: "cb",
						category_ids: "ca",
						chain_types: "ct",
						child_ids: "chi",
						city_ids: "ti",
						classifications: "cl",
						cms_user_id: "cmi",
						comparison_ids: "cmp",
						consortium_ids: "mi",
						continents: "con",
						country_ids: "ci",
						country_status: "cs",
						course_ids: "co",
						cpm_max: "cx",
						cpm_min: "cm",
						date_max: "dax",
						date_min: "dam",
						date_type: "dat",
						degrees: "dg",
						density: "de",
						discipline_ids: "di",
						distance: "dt",
						double_reports: "dr",
						duration_max: "dx",
						duration_min: "dm",
						duration_ranges: "dur",
						education_levels: "elv",
						educational_forms: "ef",
						email: "ma",
						email_like: "mal",
						entity: "et",
						entity_ids: "eid",
						entity_types: "ety",
						entropy: "en",
						entry_level: "el",
						entry_level_max: "elx",
						entry_level_min: "elm",
						exact_name: "xna",
						exact_query: "equ",
						executive: "xu",
						experience_ids: "ex",
						external: "ext",
						facebook_id: "fb",
						favourite_ids: "fvr",
						favourited: "fav",
						fce_max: "fcex",
						fce_min: "fcem",
						filename: "fn",
						from_area_ids: "fae",
						from_city_ids: "fci",
						from_country_ids: "fco",
						from_organisation_ids: "for",
						from_region_ids: "frg",
						from_study_ids: "fst",
						from_user_ids: "fus",
						full_name: "fna",
						full_name_email: "fne",
						genders: "ge",
						godmode: "god",
						group_ids: "gi",
						group_size_max: "gsx",
						group_size_min: "gsm",
						handler_ids: "hi",
						has_adwords: "had",
						has_banner: "hb",
						has_english_courses: "hec",
						has_experience: "hex",
						has_inquiry_campaign: "hic",
						has_language_courses: "hlco",
						has_language_courses_types: "hlcot",
						has_language_studies: "hlst",
						has_lead_campaign: "hlc",
						has_organisations: "hor",
						has_reviews: "hre",
						has_venues: "hve",
						hash: "ha",
						highlight: "hl",
						ids: "id",
						ielts_max: "ieltsx",
						ielts_min: "ieltsm",
						in_ranking: "rk",
						intensity_max: "ix",
						intensity_min: "im",
						invert: "iv",
						ip: "ip",
						is_student: "is",
						iso_code: "iso",
						joint: "jt",
						keywords: "kw",
						kinds: "ki",
						language: "lan",
						language_course_ids: "lco",
						language_ids: "ln",
						latitude: "la",
						lead_campaign_ids: "ldc",
						legacy: "lgc",
						legacy_ids: "leg",
						level: "lev",
						levels: "lv",
						locale: "lc",
						locales: "lcs",
						locations: "loc",
						longitude: "lo",
						mailing_type_ids: "mty",
						manager_ids: "mid",
						member_student_ids: "msi",
						methods: "mh",
						mobility_types: "mt",
						name: "na",
						no_countries: "nci",
						no_disciplines: "ndi",
						no_duration_max: "ndx",
						no_duration_min: "ndm",
						no_from_countries: "nfc",
						no_levels: "nlv",
						no_options: "nop",
						no_purposes: "npp",
						no_users: "nus",
						not_country_ids: "!ci",
						not_degrees: "!dg",
						not_send: "ns",
						now: "now",
						occurrence_ids: "oc",
						options: "op",
						organisation_ids: "oi",
						over_budget: "ob",
						page: "pa",
						parent_ids: "pi",
						partial_reports: "plr",
						parttime_variants: "pv",
						person_ids: "ps",
						personal_updates: "per",
						population_max: "pox",
						population_min: "pom",
						portal_types: "pt",
						premiums: "pm",
						preparation_course_ids: "pco",
						presence: "pr",
						product_ids: "pro",
						project_types: "prj",
						public: "pb",
						purpose: "pu",
						purposes: "pp",
						qualified: "qa",
						query: "qu",
						ranking_ids: "ra",
						ratings: "rts",
						rbp: "rbp",
						recommended_ids: "rec",
						recursive: "rv",
						referred_student_ids: "rsi",
						region_ids: "rg",
						regions: "rgs",
						related_ids: "rel",
						relations: "rl",
						report_ids: "ri",
						responsive: "res",
						review_ids: "rw",
						rolling: "rol",
						scholarship_ids: "sc",
						search_variation: "sv",
						show_areas: "sa",
						site_ids: "sid",
						skills: "sk",
						special_programmes: "sps",
						spl: "sp",
						spotlight: "spl",
						start_dates: "sd",
						startdate_ids: "sta",
						statuses: "ss",
						student_ids: "su",
						student_organisation_ids: "so",
						study_deadline_ids: "sdl",
						study_ids: "st",
						study_relation: "sr",
						studyportals: "prtl",
						sublevel: "sl",
						subscribed: "sub",
						subscription_ids: "sb",
						tags: "tg",
						tail: "tail",
						target_ids: "ta",
						terms: "te",
						title: "til",
						to_area_ids: "tae",
						to_city_ids: "tci",
						to_country_ids: "tco",
						to_organisation_ids: "tor",
						to_region_ids: "trg",
						to_study_ids: "tst",
						to_user_ids: "tus",
						toefl_internet_max: "toeflix",
						toefl_internet_min: "toeflim",
						toefl_paper_max: "toeflpx",
						toefl_paper_min: "toeflpm",
						topic: "to",
						topic_ids: "tpc",
						toplevel: "tl",
						tuition_fee_currency: "tc",
						tuition_fee_max: "tx",
						tuition_fee_min: "tm",
						tuition_fee_target: "tt",
						tuition_fee_unit: "tu",
						tuition_ranges: "tr",
						type: "tp",
						types: "ty",
						uni_admin_users: "uau",
						uniqueid: "uid",
						url: "url",
						user_agent: "ua",
						user_country: "uc",
						user_ids: "us",
						user_region: "ur",
						venue_ids: "vn",
						webinar_ids: "wi",
						year: "yr"
					},
					types: {
						activated: "boolean",
						active: "boolean",
						affiliate: "string",
						allow: "boolean",
						application_partners: "boolean",
						approval: "boolean",
						area_ids: "integer[]",
						area_presence: "string[]",
						article_ids: "integer[]",
						assistant_ids: "integer[]",
						auditor_ids: "integer[]",
						banner_boxes: "string[]",
						banner_ids: "integer[]",
						body_ids: "integer[]",
						brand: "string",
						cae_max: "integer",
						cae_min: "integer",
						campaign_ids: "integer[]",
						capped_budget: "boolean",
						category_ids: "integer[]",
						chain_types: "string[]",
						child_ids: "integer[]",
						city_ids: "integer[]",
						classifications: "string[]",
						cms_user_id: "integer",
						comparison_ids: "integer[]",
						consortium_ids: "integer[]",
						continents: "boolean",
						country_ids: "integer[]",
						country_status: "string[]",
						course_ids: "integer[]",
						cpm_max: "integer",
						cpm_min: "integer",
						date_max: "timestamp",
						date_min: "timestamp",
						date_type: "string",
						degrees: "string[]",
						density: "string[]",
						discipline_ids: "integer[]",
						distance: "string",
						double_reports: "boolean",
						duration_max: "integer",
						duration_min: "integer",
						duration_ranges: "range[]",
						education_levels: "string[]",
						educational_forms: "string[]",
						email: "string",
						email_like: "string",
						entity: "string",
						entity_ids: "integer[]",
						entity_types: "string[]",
						entropy: "integer",
						entry_level: "string",
						entry_level_max: "string",
						entry_level_min: "string",
						exact_name: "string",
						exact_query: "string",
						executive: "boolean",
						experience_ids: "integer[]",
						external: "string",
						facebook_id: "string",
						favourite_ids: "integer[]",
						favourited: "boolean",
						fce_max: "integer",
						fce_min: "integer",
						filename: "string",
						from_area_ids: "integer[]",
						from_city_ids: "integer[]",
						from_country_ids: "integer[]",
						from_organisation_ids: "integer[]",
						from_region_ids: "integer[]",
						from_study_ids: "integer[]",
						from_user_ids: "integer[]",
						full_name: "string",
						full_name_email: "string",
						genders: "string[]",
						godmode: "boolean",
						group_ids: "integer[]",
						group_size_max: "integer",
						group_size_min: "integer",
						handler_ids: "integer[]",
						has_adwords: "boolean",
						has_banner: "boolean",
						has_english_courses: "boolean",
						has_experience: "boolean",
						has_inquiry_campaign: "boolean",
						has_language_courses: "boolean",
						has_language_courses_types: "string[]",
						has_language_studies: "boolean",
						has_lead_campaign: "boolean",
						has_organisations: "boolean",
						has_reviews: "boolean",
						has_venues: "boolean",
						hash: "string",
						highlight: "boolean",
						ids: "integer[]",
						ielts_max: "string",
						ielts_min: "string",
						in_ranking: "boolean",
						intensity_max: "integer",
						intensity_min: "integer",
						invert: "boolean",
						ip: "string",
						is_student: "boolean",
						iso_code: "string",
						joint: "string[]",
						keywords: "string",
						kinds: "string[]",
						language: "string",
						language_course_ids: "integer[]",
						language_ids: "integer[]",
						latitude: "string",
						lead_campaign_ids: "integer[]",
						legacy: "boolean",
						legacy_ids: "integer[]",
						level: "string",
						levels: "string[]",
						locale: "string",
						locales: "string[]",
						locations: "string[]",
						longitude: "string",
						mailing_type_ids: "integer[]",
						manager_ids: "integer[]",
						member_student_ids: "integer[]",
						methods: "string[]",
						mobility_types: "string[]",
						name: "string",
						no_countries: "boolean",
						no_disciplines: "boolean",
						no_duration_max: "boolean",
						no_duration_min: "boolean",
						no_from_countries: "boolean",
						no_levels: "boolean",
						no_options: "string[]",
						no_purposes: "boolean",
						no_users: "boolean",
						not_country_ids: "integer[]",
						not_degrees: "string[]",
						not_send: "boolean",
						now: "timestamp",
						occurrence_ids: "integer[]",
						options: "string[]",
						organisation_ids: "integer[]",
						over_budget: "boolean",
						page: "string",
						parent_ids: "integer[]",
						partial_reports: "boolean",
						parttime_variants: "string[]",
						person_ids: "integer[]",
						personal_updates: "boolean",
						population_max: "string",
						population_min: "string",
						portal_types: "string[]",
						premiums: "string[]",
						preparation_course_ids: "integer[]",
						presence: "string[]",
						product_ids: "integer[]",
						project_types: "string[]",
						public: "boolean",
						purpose: "string",
						purposes: "string[]",
						qualified: "boolean",
						query: "string",
						ranking_ids: "integer[]",
						ratings: "string[]",
						rbp: "boolean",
						recommended_ids: "integer[]",
						recursive: "boolean",
						referred_student_ids: "integer[]",
						region_ids: "integer[]",
						regions: "string[]",
						related_ids: "integer[]",
						relations: "string[]",
						report_ids: "integer[]",
						responsive: "boolean",
						review_ids: "integer[]",
						rolling: "boolean",
						scholarship_ids: "integer[]",
						search_variation: "integer",
						show_areas: "boolean",
						site_ids: "integer[]",
						skills: "string[]",
						special_programmes: "string[]",
						spl: "boolean",
						spotlight: "boolean",
						start_dates: "string[]",
						startdate_ids: "integer[]",
						statuses: "string[]",
						student_ids: "integer[]",
						student_organisation_ids: "integer[]",
						study_deadline_ids: "integer[]",
						study_ids: "integer[]",
						study_relation: "boolean",
						studyportals: "boolean",
						sublevel: "boolean",
						subscribed: "boolean",
						subscription_ids: "integer[]",
						tags: "string[]",
						tail: "boolean",
						target_ids: "integer[]",
						terms: "string[]",
						title: "string",
						to_area_ids: "integer[]",
						to_city_ids: "integer[]",
						to_country_ids: "integer[]",
						to_organisation_ids: "integer[]",
						to_region_ids: "integer[]",
						to_study_ids: "integer[]",
						to_user_ids: "integer[]",
						toefl_internet_max: "integer",
						toefl_internet_min: "integer",
						toefl_paper_max: "integer",
						toefl_paper_min: "integer",
						topic: "string",
						topic_ids: "integer[]",
						toplevel: "boolean",
						tuition_fee_currency: "string",
						tuition_fee_max: "integer",
						tuition_fee_min: "integer",
						tuition_fee_target: "string",
						tuition_fee_unit: "string",
						tuition_ranges: "range[]",
						type: "string",
						types: "string[]",
						uni_admin_users: "boolean",
						uniqueid: "string",
						url: "string",
						user_agent: "string",
						user_country: "integer",
						user_ids: "integer[]",
						user_region: "integer",
						venue_ids: "integer[]",
						webinar_ids: "integer[]",
						year: "integer"
					},
					alias(e) {
						if ("object" != typeof e) return "";
						if (0 === e.length) return "";
						let t = [],
							i = this;
						return e = this._sort(e), Object.keys(e).map((function(n) {
							let r = e[n];
							switch (i._getType(n)) {
								case "string[]":
									try {
										t.push(i._serializeStringArray(n, r))
									} catch (e) {}
									break;
								case "integer[]":
									try {
										t.push(i._serializeIntegerArray(n, r))
									} catch (e) {}
									break;
								case "range[]":
									try {
										t.push(i._serializeRangeArray(n, r))
									} catch (e) {}
									break;
								case "string":
									"string" != typeof r && (r = ""), r = r.trim(), "" !== r && t.push(i._getShortName(n) + "-" + r);
									break;
								case "integer":
									r = parseInt(r, 10), isNaN(r) || t.push(i._getShortName(n) + "-" + r);
									break;
								case "boolean":
									r ? t.push(i._getShortName(n) + "-1") : t.push(i._getShortName(n) + "-0");
									break;
								case "timestamp":
									try {
										r = i._parseTimeStamp(r), t.push(i._getShortName(n) + "-" + r)
									} catch (e) {}
							}
						})), 0 === t.length ? "" : t.join("|")
					},
					unalias(e) {
						if ("string" != typeof e) return {};
						let t = e.split("|");
						t.sort();
						let i = {},
							n = this;
						return t.map((function(e) {
							let t = e.split("-"),
								r = t.shift(),
								o = t.join("-"),
								s = n._getLongName(r);
							if ("" === s) return;
							let a = n._getType(s);
							if ("" !== a) switch (a) {
								case "string[]":
									try {
										i[s] = n._unserializeStringArray(o)
									} catch (e) {
										return
									}
									break;
								case "integer[]":
									try {
										i[s] = n._unserializeIntegerArray(o)
									} catch (e) {
										return
									}
									break;
								case "range[]":
									try {
										i[s] = n._unserializeRangeArray(o)
									} catch (e) {
										return
									}
									break;
								case "string":
									i[s] = o;
									break;
								case "integer":
									isNaN(parseInt(o, 10)) || (i[s] = o);
									break;
								case "boolean":
									i[s] = !1, o && (i[s] = !0)
							}
						})), i
					},
					_sort(e) {
						let t = [];
						Object.keys(e).map((function(e) {
							t.push(e)
						})), t.sort();
						let i = {};
						return t.map((function(t) {
							i[t] = e[t]
						})), i
					},
					_unserializeStringArray(e) {
						let t = e.split(","),
							i = [];
						if (t.map((function(e) {
								let t = e.trim();
								"" !== t && i.push(t)
							})), 0 === i.length) throw new Error("Parameters._unserializeStringArray: clean array is empty");
						return i
					},
					_unserializeIntegerArray(e) {
						let t = e.split(","),
							i = [];
						if (t.map((function(e) {
								let t = parseInt(e, 10);
								isNaN(t) || i.push(t)
							})), 0 === i.length) throw new Error("Parameters._unserializeIntegerArray: empty clean array!");
						return i
					},
					_serializeRangeArray(e, t) {
						if ("" === this._getShortName(e)) throw new Error("No alias found for " + e + "!");
						if (t instanceof Array != 1) throw new Error("Not an array!");
						if (0 === t.length) throw new Error("Empty array!");
						let i = [];
						if (t.map((function(e) {
								if (e instanceof Array == 0) throw new Error("Range not an array!");
								let t = [];
								e.map((function(e) {
									let i = parseInt(e, 10);
									if (isNaN(i)) throw new Error("Range value is not a number!");
									t.push(i)
								})), i.push("[" + t.join(",") + "]")
							})), 0 === i.length) throw new Error("Empty clean array!");
						return this._getShortName(e) + "-" + i.join(",")
					},
					_unserializeRangeArray(e) {
						e = "[" + e + "]";
						let t = [];
						try {
							t = JSON.parse(e)
						} catch (e) {
							throw new Error("Parameters._unserializeRangeArray: incorrect range format!")
						}
						if (!(t instanceof Array)) throw new Error("Parameters._unserializeRangeArray: ranges is not an array!");
						if (0 === t.length) throw new Error("Parameters._unserializeRangeArray: nothing found in ranges!");
						let i = [];
						return t.map((function(e) {
							if (2 !== e.length) throw new Error("Parameters._unserializeRangeArray: single range should have two values!");
							let t = [];
							e.map((function(e) {
								t.push(parseInt(e, 10))
							})), i.push(t)
						})), i
					},
					_serializeIntegerArray(e, t) {
						if ("" === this._getShortName(e)) throw new Error("No alias found for " + e + "!");
						if (!(t instanceof Array)) throw new Error("Not an array!");
						if (0 === t.length) throw new Error("Empty array!");
						let i = [];
						if (t.map((function(e) {
								let t = parseInt(e, 10);
								isNaN(t) || i.push(t)
							})), 0 === i.length) throw new Error("Empty clean array!");
						return this._getShortName(e) + "-" + i.join(",")
					},
					_serializeStringArray(e, t) {
						if ("" === this._getShortName(e)) throw new Error("No alias found for " + e + "!");
						if (!(t instanceof Array)) throw new Error("Not an array!");
						if (0 === t.length) throw new Error("Empty array!");
						let i = [];
						if (t.map((function(e) {
								let t = e.trim();
								"" !== t && i.push(t)
							})), 0 === i.length) throw new Error("Empty clean array!");
						return this._getShortName(e) + "-" + i.join(",")
					},
					_getType(e) {
						return void 0 !== this.types[e] ? this.types[e] : ""
					},
					_getShortName(e) {
						return void 0 !== this.aliases[e] ? this.aliases[e] : ""
					},
					_getLongName(e) {
						let t = "",
							i = this;
						return Object.keys(this.aliases).map((function(n) {
							i.aliases[n] === e && (t = n)
						})), t
					},
					_parseTimeStamp(e) {
						e = e.trim();
						let t = 0,
							i = 0,
							n = 0,
							r = 0,
							o = 1,
							s = new Date,
							a = s.getFullYear(),
							c = moment(s).format("ZZ");
						if (s.setSeconds(parseInt(n, 10)), 19 === e.length && (c = e.substr(14, 5)), 18 === e.length) {
							let t = parseInt(e.substr(14, 2), 10),
								i = parseInt(e.substr(16, 2), 10),
								n = new Date;
							n.setHours(12, 0, 0);
							let r = new Date;
							r.setHours(t, i, 0);
							let o = n.diff(r, "minute"),
								s = "+";
							o < 0 && (s = "-"), o = Math.abs(o), i = o % 60, t = Math.floor(o / 60), i = i.toString().pad(2, "0", "left"), t = t.toString().pad(2, "0", "left"), c = s + t + i
						}
						switch (e.length) {
							case 19:
							case 18:
							case 14:
								n = e.substr(12, 2);
							case 12:
								i = e.substr(10, 2);
							case 10:
								t = e.substr(8, 2);
							case 8:
								o = e.substr(6, 2);
							case 6:
								r = e.substr(4, 2), r = parseInt(r, 10) - 1;
							case 4:
								a = e.substr(0, 4);
								break;
							default:
								throw new Error("Invalid length for datetime, expecting 4, 6, 8, 10, 12, 14, 16, 18 or 19")
						}
						return s.setHours(parseInt(t, 10)), s.setMinutes(parseInt(i, 10)), s.setSeconds(parseInt(n, 10)), s.setFullYear(parseInt(a, 10)), s.setDate(parseInt(o, 10)), s.setMonth(parseInt(r, 10)), moment(s).format("YYYYMMDDHHmmss") + c
					}
				};
				t.Z = i
			},
			6329: function(e, t, i) {
				"use strict";
				var n = i(7360);
				class r {
					static constructSearchUrl(e) {
						const t = window.location.href.split("?"),
							i = t.length > 1 ? t[1].split("#")[0] : "",
							o = r.transformSearchParams(e.q);
						if (o && Object.keys(o).length > 0) {
							const t = n.Z.alias(o);
							e.search = t, (o.country_ids || o.organisation_ids || o.region_ids) && delete e["kw-where"], o.discipline_ids && delete e["kw-what"]
						}
						delete e.levels, delete e.q;
						const s = r.getCurrentSearchUrl(),
							a = r._joinSearchParameters(e),
							c = window.location.origin;
						let d = "";
						a.length > 0 ? (d = `?${a}`, "" !== i && (d += `&${i}`)) : d = `?${i}`;
						let l = "master";
						return c.indexOf("phd") >= 0 && (l = "phd"), c.indexOf("bachelor") >= 0 && (l = "bachelor"), c.indexOf("shortcourses") >= 0 && (l = "course"), c.indexOf("distancelearning") >= 0 && (l = "distance-learning?mh=online,blended", d = d.length > 1 ? d.replace("?", "&") : ""), `${s}${l}${d}`
					}
					static constructShortQString(e, t) {
						if (!e) return null;
						let i = "";
						return t ? (r._encodeParameter(e, "kw"), i = r.createQParamsString(e)) : (r._encodeParameter(e, "q"), i = n.Z.alias(e)), i
					}
					static createQParamsString(e) {
						return Object.keys(e).filter((t => e[t])).map((t => `${t}-${e[t]}`)).join("|")
					}
					static transformSearchParams(e) {
						if (!e) return null;
						const t = {};
						r._encodeParameter(e, "q");
						const i = n.Z.alias(e, "q"),
							o = n.Z.unalias(i);
						return Object.keys(o).forEach((i => {
							"discipline_ids" !== i && "country_ids" !== i && "organisation_ids" !== i && "region_ids" !== i && "degrees" !== i || (t[i] = e[i])
						})), t
					}
					static _joinSearchParameters(e) {
						return Object.keys(e).filter((t => e[t])).map((t => `${t}=${e[t]}`)).join("&")
					}
					static _encodeParameter(e, t) {
						e[t] && (e[t] = encodeURIComponent(e[t]))
					}
					static getCurrentSearchUrl() {
						let e = window.location.origin;
						if (window.Loot && window.Loot.DataStorage) {
							const t = Loot.DataStorage.retrieve("UserPortalPreference");
							t && r.isArticlePage() && (e = t)
						}
						return r.isSearchPage() ? e + window.location.pathname : `${e}/search/`
					}
					static getPageHash() {
						return window.location.hash
					}
					static replaceQueryParametersInURL() {
						const e = new URL(window.location);
						let t = new URLSearchParams(e.search);
						if (t && t.has("q")) {
							let i = "#q=" + t.get("q");
							t.delete("q"), window.history.replaceState({}, document.title, e.pathname + i + "?" + t)
						}
					}
					static parseSearchHash(e) {
						return "" === e || "#" !== e.charAt(0) ? {
							searchParameters: new URLSearchParams,
							hash: ""
						} : {
							searchParameters: r._getSearchParams(e.slice(1)),
							hash: e
						}
					}
					static setUrl(e) {
						window.location = e
					}
					static updateSearchUrl(e) {
						const t = e.getSearchParameters(),
							i = r.constructSearchUrl(t);
						r.setUrl(i)
					}
					static _getSearchParams(e) {
						return e = (e = e.replace(/%25/gi, "").replace(/&(?![a-z]*[=])/gi, "")).split("?")[0], new URLSearchParams(e)
					}
					static omitURLSpecialCharacters(e) {
						return e.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
					}
					static isSearchPage() {
						const e = window.location.origin + "/search/";
						return window.location.href.indexOf(e) > -1
					}
					static isArticlePage() {
						const e = window.location.origin + "/articles/";
						return window.location.href.indexOf(e) > -1
					}
					static isStudyPage() {
						let e = !1;
						for (let t of ["/studies/"])
							if (window.location.href.indexOf(t) > -1) {
								e = !0;
								break
							} return e
					}
					static constructGASearchParameters(e) {
						const t = n.Z.alias(e.parameters);
						return ["q", "token", "path", "hh", "include_order"].forEach((t => {
							delete e.extra[t]
						})), e.extra.length = 10, "#q=" + t + "&" + Object.keys(e.extra).map((t => t + "=" + e.extra[t])).join("&")
					}
				}
				window.UrlHandler = r
			},
			2270: function(e, t, i) {
				"use strict";
				i.d(t, {
					default: function() {
						return c
					}
				});
				const n = {
					mandatory_fields: ["category", "action"],
					default_action: "click",
					console_info: [],
					parseTrackers: function(e) {
						var t = e ? [e] : document.querySelectorAll("[data-ga-tracking]");
						t.length && Array.from(t).forEach((function(e) {
							if (!e.hasAttribute("data-ga-parsed")) try {
								n._attachTracker(e)
							} catch (t) {
								n._warning(t, e)
							}
						}))
					},
					_warning: function(e, t) {},
					_attachTracker: function(e) {
						if (!e.tagName) throw "The provided el is not an element.";
						if (!e.hasAttribute("data-ga-tracking")) throw "Missing attribute: data-ga-tracking.";
						var t = e.getAttribute("data-ga-tracking"),
							i = [];
						switch (i = JSON.parse(t), (i = n._validateJSON(i)).event) {
							case "domready":
								n._warning("The 'domready' event is deprecated, use the 'immediate' event instead.", e);
								break;
							case "immediate":
								n.fireTracker(i);
								break;
							default:
								n.console_info.push({
									Tracker: i,
									element: e,
									event: i.event
								}), e.addEventListener(i.event, (function() {
									e.getAttribute("data-ga-tracking-disabled") || (n.fireTracker(i), "remove" == i.onComplete && e.setAttribute("data-ga-tracking-disabled", !0))
								}))
						}
						return e.setAttribute("data-ga-parsed", !0), !0
					},
					_validateJSON: function(e) {
						return n.mandatory_fields.forEach((function(t) {
							if (!e.hasOwnProperty(t) || !e[t]) throw "Missing property: " + t + "."
						})), e.hasOwnProperty("event") || (e.event = n.default_action), e.hasOwnProperty("onComplete") || (e.onComplete = null), e.category = e.category || "", e.action = e.action || "", e.label = e.label || "", e.value = e.value || 0, e
					},
					fireTracker: function(e, t) {
						"undefined" === t && (t = "undefined"), "function" == typeof ga && ga("send", "event", {
							eventCategory: e.category,
							eventAction: e.action,
							eventLabel: e.label,
							eventValue: "number" == typeof e.value ? e.value : 0,
							hitCallback: function() {
								document.dispatchEvent(new CustomEvent("ga-tracking-fired", {
									detail: {
										trigger: t
									}
								}))
							},
							hitCallbackFail: function() {
								document.dispatchEvent(new CustomEvent("ga-tracking-fired", {
									detail: {
										trigger: t
									}
								}))
							},
							nonInteraction: e.nonInteraction || !1
						}), "object" == typeof _gaq && _gaq.push(["_trackEvent", e.category, e.action, e.label, e.value])
					},
					firePageView: function() {
						"function" == typeof ga && (ga("set", {
							page: location.pathname + location.search
						}), ga("send", "pageview"))
					}
				};
				var r = i(9673),
					o = i(7484),
					s = i.n(o),
					a = a || {};
				a.GA = n, a.waitForLoad = function(e, t) {
					"[object Array]" !== Object.prototype.toString.call(e) && t(!1);
					const i = [];
					for (let t = 0; t < e.length; t++) {
						i.push(!1);
						const o = (0, r.checkNamespace)(e[t].name),
							s = void 0 !== window[e[t].name];
						let a = !1,
							c = !1;
						s && (a = void 0 !== window[e[t].name].initialised, c = window[e[t].name].initialised), o || s && !a || s && a && !0 === c ? (i[t] = !0, n()) : (window.addEventListener(e[t].event, (() => {
							i[t] = !0, n()
						})), document.addEventListener(e[t].event, (() => {
							i[t] = !0, n()
						})))
					}

					function n() {
						const e = i.filter(((e, t, i) => i.indexOf(e) === t));
						1 === e.length && !0 === e[0] && t()
					}
				}, a.getBaseUrl = function() {
					const e = new URL(window.location);
					let t = e.protocol;
					return t += "//", t += e.hostname, -1 === ["80", "443"].indexOf(e.port) && (t += ":" + e.port), t += "/", t
				}, a.throttle = function(e, t, i) {
					t = t || window;
					let n = !1;
					t.addEventListener(e, (function() {
						n || (n = !0, window.requestAnimationFrame((function() {
							i(), n = !1
						})))
					}))
				}, a.formatAsLocalisedCurrency = function(e, t, i) {
					let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
						r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "yes";
					const o = {
							minimumFractionDigits: n,
							maximumFractionDigits: n
						},
						s = {
							decimals: n
						};
					"yes" === r && (o.currency = t, o.style = "currency", s.prefix = i + " "), parseInt(e, 10);
					let a = parseFloat(e).toLocaleString("nu", o);
					return a
				}, a.breakpoints = function(e, t) {
					const i = [];
					let n = !1;

					function r(e) {
						let t = "";
						switch (e) {
							case "ExtraLarge":
								t = "all and (min-width: 1025px)";
								break;
							case "Large":
								t = "all and (min-width: 769px) and (max-width: 1024px)";
								break;
							case "Medium":
								t = "all and (min-width: 481px) and (max-width: 768px)";
								break;
							case "Small":
								t = "all and (max-width: 480px)";
								break;
							default:
								t = "none"
						}
						return window.matchMedia(t).matches
					}
					return "[object Array]" === Object.prototype.toString.call(e) ? e.forEach((function(e) {
						i.push(r(e))
					})) : i.push(r(e)), i.some(function(e) {
						if (e) return t && t.apply(this), n = !0, !0
					}.bind(this)), n
				}, a.scrollListener = function(e, t) {
					let i, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 400,
						r = !1;
					(i = function() {
						e.getBoundingClientRect().top + (document.body.getBoundingClientRect().top - n) > 0 || t && (t(), r = !0, document.removeEventListener("scroll", i))
					})(), i(), r || document.addEventListener("scroll", i)
				}, a.lazyLoadScript = function(e, t, i) {
					let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 400;
					a.scrollListener(t, (() => {
						let t = e.length;
						if (0 === e.length) return;
						let n = 0;
						for (let r = 0; r < t; r++) Loot.MicroserviceInjector.injectScriptToBody(e[r]).then((function() {
							n++, n === t && i && i()
						}))
					}), n)
				}, a.addFunctionToPipelineTracker = function(e) {
					void 0 !== window.DataTracker ? e(window.DataTracker) : document.addEventListener("DataTrackerReady", (function() {
						e(window.DataTracker)
					}))
				}, a.getSnowplowProperty = function(e, t) {
					t && "function" == typeof t && (snowplow ? snowplow((function() {
						const i = this[Object.keys(this)[0]];
						if (!i || !i[e]) return t();
						const n = i[e].call(this);
						return t(n)
					})) : t())
				}, a.getUserId = function(e) {
					a.getSnowplowProperty("getDomainUserId", e)
				}, a.getCurrentContentHash = function() {
					var e = new URL(window.location).hash.replace("#", "").split(":");
					return 2 === e.length && "content" === e[0] ? e[1] : ""
				}, a.debounce = function(e, t) {
					let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
						n = null,
						r = null;
					const o = () => e.apply(i, r);
					return function() {
						r = arguments, clearTimeout(n), n = setTimeout(o, t)
					}
				}, Element.prototype.formatAsNumber = function() {
					const e = this.dataset.decimals || 0,
						t = parseFloat(this.innerHTML);
					return isNaN(t) || (this.innerHTML = t.toLocaleString("nu", {
						style: "decimal",
						minimumFractionDigits: e,
						maximumFractionDigits: e
					})), this
				}, Element.prototype.formatAsDateTime = function() {
					const e = this.getAttribute("datetime").trim().toString();
					if ("" === e) return this;
					const t = this.dataset.format;
					if (!t) return this;
					const i = t.trim().toString();
					if (!i || "" === i) return this;
					const n = s()(e).format(i);
					if ("Invalid date" === n) return this;
					this.innerText = n;
					const r = this.getAttribute("data-format-title");
					return r && this.setAttribute("title", s()(e).format(r)), this
				}, Function.prototype.clone = function() {
					const e = this,
						t = function() {
							return e.apply(this, arguments)
						};
					for (const e in this) this.hasOwnProperty(e) && (t[e] = this[e]);
					return t
				}, document.addEventListener("DOMContentLoaded", (function() {
					! function() {
						const e = document.querySelectorAll("[data-OverText]");
						e.length > 0 && Array.from(e).forEach((function(e) {
							const t = e.dataset.overtext;
							new OverText(e, {
								textOverride: t
							})
						}))
					}(), document.addEventListener("redirect", (function(e) {
						window.location !== e && (window.location = e)
					})), a.GA.parseTrackers(null)
				})), window.Shared = a;
				var c = a
			},
			4178: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			5662: function(e, t, i) {
				"use strict";
				var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
						void 0 === n && (n = i), Object.defineProperty(e, n, {
							enumerable: !0,
							get: function() {
								return t[i]
							}
						})
					} : function(e, t, i, n) {
						void 0 === n && (n = i), e[n] = t[i]
					}),
					r = this && this.__exportStar || function(e, t) {
						for (var i in e) "default" === i || t.hasOwnProperty(i) || n(t, e, i)
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), r(i(4178), t)
			},
			1634: function(e, t) {
				"use strict";
				var i;
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.Actor = void 0, (i = t.Actor || (t.Actor = {})).USER = "user", i.AUTOMATION = "automation"
			},
			1570: function(e, t) {
				"use strict";
				var i;
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.EventType = void 0, (i = t.EventType || (t.EventType = {})).AnonymousStudentServiceReady = "anonymous-student-service-ready", i.AnonymousStudentProfileUpdated = "anonymous-student-profile-updated", i.AnonymousStudentProfileSynced = "anonymous-student-profile-synced", i.AnonymousStudentStateChanged = "anonymous-student-state-changed"
			},
			2617: function(e, t, i) {
				"use strict";
				var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
						void 0 === n && (n = i), Object.defineProperty(e, n, {
							enumerable: !0,
							get: function() {
								return t[i]
							}
						})
					} : function(e, t, i, n) {
						void 0 === n && (n = i), e[n] = t[i]
					}),
					r = this && this.__exportStar || function(e, t) {
						for (var i in e) "default" === i || t.hasOwnProperty(i) || n(t, e, i)
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), r(i(1570), t), r(i(3898), t), r(i(6411), t), r(i(1634), t)
			},
			3898: function(e, t) {
				"use strict";
				var i;
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.InterestType = void 0, (i = t.InterestType || (t.InterestType = {})).COUNTRY = "interests_countries", i.DISCIPLINE = "interests_disciplines"
			},
			6411: function(e, t) {
				"use strict";
				var i;
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.StudentRepositoryStateType = void 0, (i = t.StudentRepositoryStateType || (t.StudentRepositoryStateType = {}))[i.PENDING = 0] = "PENDING", i[i.ONLINE = 1] = "ONLINE", i[i.OFFLINE = 2] = "OFFLINE"
			},
			8308: function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.AnonymousStudentProfileSynced = void 0;
				const n = i(1570);
				class r {
					constructor(e, t) {
						this.timestamp = e, this.state = t, this.eventType = r.EventType
					}
				}
				t.AnonymousStudentProfileSynced = r, r.EventType = n.EventType.AnonymousStudentProfileSynced
			},
			4236: function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.AnonymousStudentProfileUpdated = void 0;
				const n = i(2617);
				class r {
					constructor(e, t, i) {
						this.timestamp = e, this.state = t, this.changes = i, this.eventType = r.EventType
					}
				}
				t.AnonymousStudentProfileUpdated = r, r.EventType = n.EventType.AnonymousStudentProfileUpdated
			},
			1612: function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.AnonymousStudentServiceReady = void 0;
				const n = i(2617);
				class r {
					constructor(e) {
						this.eventType = r.EventType, this.timestamp = new Date, this.anonymousStudentService = e
					}
				}
				t.AnonymousStudentServiceReady = r, r.EventType = n.EventType.AnonymousStudentServiceReady
			},
			1886: function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.AnonymousStudentStateChanged = void 0;
				const n = i(2617);
				class r {
					constructor(e, t, i) {
						this.timestamp = e, this.oldState = t, this.newState = i, this.eventType = r.EventType
					}
				}
				t.AnonymousStudentStateChanged = r, r.EventType = n.EventType.AnonymousStudentStateChanged
			},
			1688: function(e, t, i) {
				"use strict";
				var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
						void 0 === n && (n = i), Object.defineProperty(e, n, {
							enumerable: !0,
							get: function() {
								return t[i]
							}
						})
					} : function(e, t, i, n) {
						void 0 === n && (n = i), e[n] = t[i]
					}),
					r = this && this.__exportStar || function(e, t) {
						for (var i in e) "default" === i || t.hasOwnProperty(i) || n(t, e, i)
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), r(i(8308), t), r(i(4236), t), r(i(1612), t), r(i(1886), t)
			},
			7312: function(e, t, i) {
				"use strict";
				var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
						void 0 === n && (n = i), Object.defineProperty(e, n, {
							enumerable: !0,
							get: function() {
								return t[i]
							}
						})
					} : function(e, t, i, n) {
						void 0 === n && (n = i), e[n] = t[i]
					}),
					r = this && this.__exportStar || function(e, t) {
						for (var i in e) "default" === i || t.hasOwnProperty(i) || n(t, e, i)
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), r(i(5662), t), r(i(2617), t), r(i(1688), t)
			},
			5175: function(e) {
				globalThis,
				e.exports = (() => {
					"use strict";
					var e = {
							173: (e, t) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.TrackerImporter = void 0, t.TrackerImporter = class {
									constructor() {
										this.trackerObject = null, this.trackerIsLoaded = !1
									}
									get tracker() {
										return this.trackerObject
									}
									get trackerLoaded() {
										return this.trackerIsLoaded
									}
									loadTracker(e) {
										if (void 0 !== window.snowplow) return this.trackerObject = window.snowplow, this.trackerIsLoaded = !0, void e(window.snowplow);
										document.addEventListener("snowplow_available", (() => {
											this.trackerObject = window.snowplow, this.trackerIsLoaded = !0, e(window.snowplow)
										}))
									}
								}
							},
							819: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.Tracker = void 0;
								const n = i(173),
									r = i(898),
									o = i(458),
									s = i(658),
									a = i(779),
									c = i(392),
									d = i(306),
									l = i(192);
								t.Tracker = class {
									constructor(e) {
										this.product = e, this.tracker = null, this.trackerImporter = null, this.structuredEventValidator = this.initStructuredEventValidators(), this.initTrackerSupport()
									}
									trackStructuredEvent(e) {
										if (null === this.tracker) throw new Error(l.ErrorMessage.TRACKER_UNAVAILABLE);
										e.category = this.product, this.structuredEventValidator.validate(e), this.tracker("trackStructEvent", e)
									}
									trackStudyCardImpression(e) {
										if (null === this.tracker) throw new Error(l.ErrorMessage.TRACKER_UNAVAILABLE);
										this.tracker("addEnhancedEcommerceImpressionContext", e.getTrackingContext()), this.tracker("trackEnhancedEcommerceAction", {
											action: "view"
										})
									}
									trackStudyCardClick(e) {
										if (null === this.tracker) throw new Error(l.ErrorMessage.TRACKER_UNAVAILABLE);
										this.tracker("addEnhancedEcommerceProductContext", e.getTrackingContext()), this.tracker("trackEnhancedEcommerceAction", {
											action: "click"
										})
									}
									trackProductView(e) {
										if (null === this.tracker) throw new Error(l.ErrorMessage.TRACKER_UNAVAILABLE);
										this.tracker("addEnhancedEcommerceProductContext", e.getTrackingContext()), this.tracker("trackEnhancedEcommerceAction", {
											action: "detail"
										})
									}
									initStructuredEventValidators() {
										const e = new o.EventValidator;
										return e.addValidator(new r.CategoryValidator), e.addValidator(new s.ActionValidator), e.addValidator(new a.LabelValidator), e.addValidator(new c.PropertyValidator), e.addValidator(new d.ValueValidator), e
									}
									initTrackerSupport() {
										this.trackerImporter = new n.TrackerImporter, this.trackerImporter.loadTracker((() => {
											this.tracker = this.trackerImporter.tracker, window.DatalakeEventTrackerLoaded = !0, document.dispatchEvent(new Event("DatalakeEventTrackerLoaded"))
										}))
									}
								}
							},
							957: (e, t) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.ValidationError = void 0;
								class i extends Error {
									constructor(e) {
										super(e), this.name = "ValidationError"
									}
								}
								t.ValidationError = i
							},
							658: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.ActionValidator = void 0;
								const n = i(721),
									r = i(192),
									o = i(957),
									s = i(662);
								t.ActionValidator = class {
									constructor() {
										this.snakeCaseValidator = new s.SnakeCaseValidator
									}
									validate(e) {
										const t = e.action;
										if (void 0 !== t) {
											if (!Object.values(n.Action).includes(t)) throw new o.ValidationError(r.ErrorMessage.INVALID_ACTION);
											this.snakeCaseValidator.validate(t)
										}
									}
								}
							},
							898: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.CategoryValidator = void 0;
								const n = i(550),
									r = i(192),
									o = i(957),
									s = i(690);
								t.CategoryValidator = class {
									constructor() {
										this.pascalCaseValidator = new s.PascalCaseValidator
									}
									validate(e) {
										const t = e.category;
										if (void 0 === t) throw new o.ValidationError(r.ErrorMessage.INVALID_PRODUCT);
										if (!Object.values(n.Product).includes(t)) throw new o.ValidationError(r.ErrorMessage.INVALID_PRODUCT);
										this.pascalCaseValidator.validate(t)
									}
								}
							},
							458: (e, t) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.EventValidator = void 0, t.EventValidator = class {
									constructor() {
										this.validators = []
									}
									addValidator(e) {
										this.validators.push(e)
									}
									validate(e) {
										for (const t of this.validators) t.validate(e)
									}
								}
							},
							779: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.LabelValidator = void 0;
								const n = i(662);
								t.LabelValidator = class {
									constructor() {
										this.snakeCaseValidator = new n.SnakeCaseValidator
									}
									validate(e) {
										const t = e.label;
										void 0 !== t && this.snakeCaseValidator.validate(t)
									}
								}
							},
							690: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.PascalCaseValidator = void 0;
								const n = i(192),
									r = i(957);
								t.PascalCaseValidator = class {
									validate(e) {
										if ("string" != typeof e || -1 !== e.indexOf("-") || -1 !== e.indexOf("_") || e.charAt(0).toUpperCase() !== e.charAt(0)) throw new r.ValidationError(n.ErrorMessage.INVALID_PASCAL_CASE)
									}
								}
							},
							392: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.PropertyValidator = void 0;
								const n = i(662);
								t.PropertyValidator = class {
									constructor() {
										this.snakeCaseValidator = new n.SnakeCaseValidator
									}
									validate(e) {
										void 0 !== e.property && this.snakeCaseValidator.validate(e.property)
									}
								}
							},
							662: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.SnakeCaseValidator = void 0;
								const n = i(192),
									r = i(957);
								t.SnakeCaseValidator = class {
									validate(e) {
										if ("string" != typeof e || e !== e.toLowerCase() || -1 !== e.indexOf("-")) throw new r.ValidationError(n.ErrorMessage.INVALID_SNAKE_CASE)
									}
								}
							},
							306: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.ValueValidator = void 0;
								const n = i(192),
									r = i(957);
								t.ValueValidator = class {
									validate(e) {
										if (void 0 !== e.value && ("string" == typeof e.value || isNaN(e.value))) throw new r.ValidationError(n.ErrorMessage.INVALID_NUMBER)
									}
								}
							},
							721: (e, t) => {
								var i;
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.Action = void 0, (i = t.Action || (t.Action = {})).CLICK = "click", i.IMPRESSION = "impression", i.POPUP_OPEN = "popup_open", i.POPUP_CLOSE = "popup_close", i.TIME_SPENT = "time_spent", i.NON_INTERACTIVE = "non_interactive", i.RENDERED = "rendered"
							},
							192: (e, t) => {
								var i;
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.ErrorMessage = void 0, (i = t.ErrorMessage || (t.ErrorMessage = {})).INVALID_NUMBER = "invalid_number", i.INVALID_SNAKE_CASE = "invalid_snake_case", i.INVALID_PASCAL_CASE = "invalid_pascal_case", i.INVALID_ACTION = "invalid_action", i.INVALID_PRODUCT = "invalid_product", i.TRACKER_UNAVAILABLE = "tracker_unavailable"
							},
							976: (e, t) => {
								var i;
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.ListName = void 0, (i = t.ListName || (t.ListName = {})).SEARCH_PAGE = "search_page", i.STUDY_CARD_STUDY_OPTIONS = "study_card_study_options", i.RECOMMENDER = "recommender", i.UNIVERSITY_HIGHLIGHTED = "university_highlighted", i.UNIVERSITY_PROGRAMMES = "university_programmes", i.STUDY_CARD_COUNTRY_DEGREE = "study_card_country_degree", i.STUDY_CARD_DISCIPLINE = "study_card_discipline", i.WISHLIST = "wishlist"
							},
							135: (e, t) => {
								var i;
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.ListPageType = void 0, (i = t.ListPageType || (t.ListPageType = {})).SEARCH = "search", i.STUDY = "study", i.ARTICLE = "article", i.STUDY_OPTIONS = "study_options", i.UNIVERSITY = "university", i.ACCOUNT = "account", i.COUNTRY = "country", i.COUNTRY_DEGREE = "country_degree", i.DISCIPLINE = "discipline", i.CITY = "city", i.UNIBUDDY = "unibuddy", i.HOME = "home"
							},
							257: (e, t) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.ProductType = void 0, (t.ProductType || (t.ProductType = {})).STUDY = "study"
							},
							550: (e, t) => {
								var i;
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.Product = void 0, (i = t.Product || (t.Product = {})).BESTFIT_OVERVIEW = "BestfitOverview", i.PROFILE = "Profile", i.ACCOUNT_PAGE = "AccountPage", i.PROFILE_QUESTIONNAIRES = "ProfileQuestionnaires", i.EXPERIMENT = "Experiment", i.STUDY_PAGE = "StudyPage", i.HOME_PAGE = "HomePage", i.ORGANISATION_PAGE = "OrganisationPage", i.SEARCH_PAGE = "SearchPage", i.DISCIPLINE_PAGE = "DisciplinePage", i.COUNTRY_TEST = "CountryTest", i.PERSONALITY_TEST = "PersonalityTest", i.REVIEWS = "Reviews", i.DECISION_MAKING_SERVICE = "DecisionMakingService", i.GOOGLE_AD_MANAGER = "GoogleAdManager", i.ERT = "ERT", i.SMT = "SMT", i.UNIBUDDY = "Unibuddy", i.COUNTRY_DEGREE = "CountryDegreePage", i.STUDY_OPTIONS = "StudyOptionsPage", i.ARTICLE_PAGE = "ArticlePage", i.RECOMMENDATONS = "Recommendations"
							},
							966: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.ClickEcommerceTrackingData = void 0;
								const n = i(519);
								class r extends n.EcommerceTrackingData {
									constructor(e, t, i, n, r, o, s, a, c, d) {
										super(e, t, i, n, r, o, s, a, c), this.productId = e, this.listPageType = t, this.listName = i, this.organisationId = n, this.disciplines = r, this.premium = o, this.listPosition = s, this.unitPrice = a, this.currency = c, this.productType = d
									}
									getTrackingContext() {
										var e, t;
										return {
											id: this.getProductId(),
											name: this.productType,
											list: this.listName,
											brand: this.getOrganisationId(),
											category: this.getDisciplines(),
											variant: null !== (t = null === (e = this.premium) || void 0 === e ? void 0 : e.toString()) && void 0 !== t ? t : void 0,
											price: this.getUnitPrice(),
											quantity: "1",
											coupon: this.listPageType,
											position: this.listPosition,
											currency: this.getCurrency()
										}
									}
								}
								t.ClickEcommerceTrackingData = r
							},
							519: (e, t) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.EcommerceTrackingData = void 0, t.EcommerceTrackingData = class {
									constructor(e, t, i, n, r, o, s, a, c) {
										this.productId = e, this.listPageType = t, this.listName = i, this.organisationId = n, this.disciplines = r, this.premium = o, this.listPosition = s, this.unitPrice = a, this.currency = c
									}
									getProductId() {
										return this.productId.toString()
									}
									getOrganisationId() {
										return this.organisationId.toString()
									}
									getDisciplines() {
										if (this.disciplines) return this.disciplines.map((e => e.toString())).join("/")
									}
									getUnitPrice() {
										if (this.unitPrice) return this.unitPrice.toString()
									}
									getCurrency() {
										if (this.currency && 3 === this.currency.length) return this.currency.toString()
									}
								}
							},
							324: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.StudyCardImpressionData = void 0;
								const n = i(519);
								class r extends n.EcommerceTrackingData {
									getTrackingContext() {
										var e, t;
										return {
											id: this.getProductId(),
											name: this.listPageType,
											list: this.listName,
											brand: this.getOrganisationId(),
											category: this.getDisciplines(),
											variant: null !== (t = null === (e = this.premium) || void 0 === e ? void 0 : e.toString()) && void 0 !== t ? t : void 0,
											position: this.listPosition,
											price: this.getUnitPrice(),
											currency: this.getCurrency()
										}
									}
								}
								t.StudyCardImpressionData = r
							},
							227: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.ViewEcommerceTrackingData = void 0;
								const n = i(519);
								class r extends n.EcommerceTrackingData {
									constructor(e, t, i, n, r, o, s, a, c, d) {
										super(e, t, i, n, r, o, s, a, c), this.productId = e, this.listPageType = t, this.listName = i, this.organisationId = n, this.disciplines = r, this.premium = o, this.listPosition = s, this.unitPrice = a, this.currency = c, this.productType = d
									}
									getTrackingContext() {
										var e, t;
										return {
											id: this.getProductId(),
											name: this.productType,
											list: this.listName,
											brand: this.getOrganisationId(),
											category: this.getDisciplines(),
											variant: null !== (t = null === (e = this.premium) || void 0 === e ? void 0 : e.toString()) && void 0 !== t ? t : void 0,
											price: this.getUnitPrice(),
											quantity: "1",
											coupon: this.listPageType,
											position: this.listPosition,
											currency: this.getCurrency()
										}
									}
								}
								t.ViewEcommerceTrackingData = r
							}
						},
						t = {};

					function i(n) {
						var r = t[n];
						if (void 0 !== r) return r.exports;
						var o = t[n] = {
							exports: {}
						};
						return e[n](o, o.exports, i), o.exports
					}
					var n = {};
					return (() => {
						var e = n;
						Object.defineProperty(e, "__esModule", {
							value: !0
						}), e.ViewEcommerceTrackingData = e.ClickEcommerceTrackingData = e.StudyCardImpressionData = e.EcommerceTrackingData = e.ProductType = e.ListName = e.ListPageType = e.Product = e.Action = e.Tracker = void 0;
						const t = i(819);
						Object.defineProperty(e, "Tracker", {
							enumerable: !0,
							get: function() {
								return t.Tracker
							}
						});
						const r = i(721);
						Object.defineProperty(e, "Action", {
							enumerable: !0,
							get: function() {
								return r.Action
							}
						});
						const o = i(550);
						Object.defineProperty(e, "Product", {
							enumerable: !0,
							get: function() {
								return o.Product
							}
						});
						const s = i(257);
						Object.defineProperty(e, "ProductType", {
							enumerable: !0,
							get: function() {
								return s.ProductType
							}
						});
						const a = i(519);
						Object.defineProperty(e, "EcommerceTrackingData", {
							enumerable: !0,
							get: function() {
								return a.EcommerceTrackingData
							}
						});
						const c = i(324);
						Object.defineProperty(e, "StudyCardImpressionData", {
							enumerable: !0,
							get: function() {
								return c.StudyCardImpressionData
							}
						});
						const d = i(966);
						Object.defineProperty(e, "ClickEcommerceTrackingData", {
							enumerable: !0,
							get: function() {
								return d.ClickEcommerceTrackingData
							}
						});
						const l = i(227);
						Object.defineProperty(e, "ViewEcommerceTrackingData", {
							enumerable: !0,
							get: function() {
								return l.ViewEcommerceTrackingData
							}
						});
						const u = i(135);
						Object.defineProperty(e, "ListPageType", {
							enumerable: !0,
							get: function() {
								return u.ListPageType
							}
						});
						const g = i(976);
						Object.defineProperty(e, "ListName", {
							enumerable: !0,
							get: function() {
								return g.ListName
							}
						})
					})(), n
				})()
			},
			5725: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.EventAggregationEventType = void 0, (t.EventAggregationEventType || (t.EventAggregationEventType = {})).WEBSOCKET_SERVICE_READY = "WebsocketServiceReady"
			},
			423: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			8759: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			6570: function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.WebsocketServiceReadyEvent = void 0;
				const n = i(5725);
				class r {
					constructor(e) {
						this.eventAggregationService = e, this.eventType = r.EventType, this.timestamp = new Date
					}
				}
				t.WebsocketServiceReadyEvent = r, r.EventType = n.EventAggregationEventType.WEBSOCKET_SERVICE_READY
			},
			3385: function(e, t, i) {
				"use strict";
				var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
						void 0 === n && (n = i), Object.defineProperty(e, n, {
							enumerable: !0,
							get: function() {
								return t[i]
							}
						})
					} : function(e, t, i, n) {
						void 0 === n && (n = i), e[n] = t[i]
					}),
					r = this && this.__exportStar || function(e, t) {
						for (var i in e) "default" === i || t.hasOwnProperty(i) || n(t, e, i)
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), r(i(3400), t), r(i(423), t), r(i(8759), t), r(i(6570), t), r(i(5725), t)
			},
			3400: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			8328: function(e, t, i) {
				"use strict";
				var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
						void 0 === n && (n = i), Object.defineProperty(e, n, {
							enumerable: !0,
							get: function() {
								return t[i]
							}
						})
					} : function(e, t, i, n) {
						void 0 === n && (n = i), e[n] = t[i]
					}),
					r = this && this.__exportStar || function(e, t) {
						for (var i in e) "default" === i || t.hasOwnProperty(i) || n(t, e, i)
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), r(i(3385), t), r(i(4285), t), r(i(3519), t)
			},
			3974: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			3112: function(e, t) {
				"use strict";
				var i;
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.SessionServiceEventType = void 0, (i = t.SessionServiceEventType || (t.SessionServiceEventType = {})).SESSION_SERVICE_READY = "SessionServiceReady", i.SESSION_CREATED = "SessionCreated", i.SESSION_DESTROYED = "SessionDestroyed"
			},
			3641: function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.SessionCreatedEvent = void 0;
				const n = i(3112);
				class r {
					constructor(e) {
						this.eventType = r.EventType, this.timestamp = new Date, this.session = e
					}
				}
				t.SessionCreatedEvent = r, r.EventType = n.SessionServiceEventType.SESSION_CREATED
			},
			3533: function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.SessionDestroyedEvent = void 0;
				const n = i(3112);
				class r {
					constructor() {
						this.eventType = r.EventType, this.timestamp = new Date
					}
				}
				t.SessionDestroyedEvent = r, r.EventType = n.SessionServiceEventType.SESSION_DESTROYED
			},
			9927: function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.SessionServiceReadyEvent = void 0;
				const n = i(3112);
				class r {
					constructor(e) {
						this.eventType = r.EventType, this.timestamp = new Date, this.sessionService = e
					}
				}
				t.SessionServiceReadyEvent = r, r.EventType = n.SessionServiceEventType.SESSION_SERVICE_READY
			},
			4285: function(e, t, i) {
				"use strict";
				var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
						void 0 === n && (n = i), Object.defineProperty(e, n, {
							enumerable: !0,
							get: function() {
								return t[i]
							}
						})
					} : function(e, t, i, n) {
						void 0 === n && (n = i), e[n] = t[i]
					}),
					r = this && this.__exportStar || function(e, t) {
						for (var i in e) "default" === i || t.hasOwnProperty(i) || n(t, e, i)
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), r(i(4024), t), r(i(8615), t), r(i(4256), t), r(i(9497), t), r(i(3974), t), r(i(5386), t), r(i(9927), t), r(i(3533), t), r(i(3641), t), r(i(3112), t)
			},
			4024: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			5386: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			4256: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			8615: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			9497: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			2301: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			3519: function(e, t, i) {
				"use strict";
				var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
						void 0 === n && (n = i), Object.defineProperty(e, n, {
							enumerable: !0,
							get: function() {
								return t[i]
							}
						})
					} : function(e, t, i, n) {
						void 0 === n && (n = i), e[n] = t[i]
					}),
					r = this && this.__exportStar || function(e, t) {
						for (var i in e) "default" === i || t.hasOwnProperty(i) || n(t, e, i)
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), r(i(2301), t)
			},
			4527: function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.AttendanceType = t.StudentField = void 0;
				const n = i(411);
				Object.defineProperty(t, "StudentField", {
					enumerable: !0,
					get: function() {
						return n.StudentField
					}
				});
				const r = i(3322);
				Object.defineProperty(t, "AttendanceType", {
					enumerable: !0,
					get: function() {
						return r.AttendanceType
					}
				})
			},
			3322: function(e, t) {
				"use strict";
				var i;
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.AttendanceType = void 0, (i = t.AttendanceType || (t.AttendanceType = {})).ONLINE = "online", i.ON_CAMPUS = "oncampus", i.BLENDED = "blended"
			},
			411: function(e, t) {
				"use strict";
				var i;
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.StudentField = void 0, (i = t.StudentField || (t.StudentField = {})).IDENTITY_ID = "identityId", i.EMAIL = "email", i.NAME = "name", i.FIRST_NAME = "first_name", i.LAST_NAME = "last_name", i.GENDER = "gender", i.BIRTH_DATE = "birth_date", i.TELEPHONE = "telephone", i.START_PERIOD_DATE = "start_period_date", i.FUNDING_TYPE = "funding_type", i.STUDY_LEVEL = "study_level", i.PREFERRED_STUDY_LEVEL = "preferred_study_level", i.RESIDENCE_COUNTRY_ID = "residence_country_id", i.NATIONALITY_COUNTRY_ID = "nationality_country_id", i.NATIONALITY_COUNTRY_ISO = "nationality_country_iso", i.STUDY_COUNTRY_ID = "study_country_id", i.REGISTRATION_IP = "registration_ip", i.REGISTRATION_PORTAL_TYPE = "registration_portal_type", i.WORK_EXPERIENCE = "work_experience", i.PROFICIENCY_TYPE = "proficiency_type", i.PROFICIENCY_TEST = "proficiency_test", i.PROFICIENCY_SCORE = "proficiency_score", i.IELTS = "ielts", i.CAE = "cae", i.FCE = "fce", i.TOEFL_IBT = "toefl_ibt", i.TOEFL_PBT = "toefl_pbt", i.PTE = "pte", i.SELF_ASSESSMENT_PROFICIENCY = "self_assessment_proficiency", i.INITIAL_REGISTRATION_PLATFORM = "initial_registration_platform", i.EMAILING_OTHER = "emailing_other", i.EMAILING_FAVOURITES = "emailing_favourites", i.EMAILING_SCHOLARSHIPS = "emailing_scholarships", i.EMAILING_UPDATES = "emailing_updates", i.LAST_LOGIN = "last_login", i.LAST_LOGIN_UTC = "last_login_utc", i.DATE_CREATED = "date_created", i.DATE_CREATED_UTC = "date_created_utc", i.LOGINS = "logins", i.DISCIPLINES = "disciplines", i.INTERESTS_COUNTRIES = "interests_countries", i.INTERESTS_DISCIPLINES = "interests_disciplines", i.EMAIL_UNSUBSCRIBE_TOKEN = "emailUnsubscribeToken", i.GDPR_ACCEPTED = "gdpr_accepted", i.ORIGIN_ORGANISATION_ID = "origin_organisation_id", i.GPA = "gpa", i.LIVING_BUDGET = "living_budget", i.TUITION_BUDGET = "tuition_budget", i.SEEN_COMPARISON_TUTORIAL = "seen_comparison_tutorial", i.ACCOMPLISHMENTS = "accomplishments", i.CURRENCY = "currency", i.AFFILIATE = "affiliate", i.AFFILIATE_URL = "affiliate_url", i.ATTENDANCE = "attendance", i.TRAFFIC_SOURCE = "traffic_source", i.TRAFFIC_SOURCE_URL = "traffic_source_url", i.DISMISSED_ONBOARDING_QUESTIONNAIRE = "dismissed_onboarding_questionnaire", i.STARTED_ONBOARDING_QUESTIONNAIRE = "started_onboarding_questionnaire"
			},
			7484: function(e) {
				e.exports = function() {
					"use strict";
					var e = 6e4,
						t = 36e5,
						i = "millisecond",
						n = "second",
						r = "minute",
						o = "hour",
						s = "day",
						a = "week",
						c = "month",
						d = "quarter",
						l = "year",
						u = "date",
						g = "Invalid Date",
						h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
						p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
						m = {
							name: "en",
							weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
							months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
						},
						f = function(e, t, i) {
							var n = String(e);
							return !n || n.length >= t ? e : "" + Array(t + 1 - n.length).join(i) + e
						},
						_ = {
							s: f,
							z: function(e) {
								var t = -e.utcOffset(),
									i = Math.abs(t),
									n = Math.floor(i / 60),
									r = i % 60;
								return (t <= 0 ? "+" : "-") + f(n, 2, "0") + ":" + f(r, 2, "0")
							},
							m: function e(t, i) {
								if (t.date() < i.date()) return -e(i, t);
								var n = 12 * (i.year() - t.year()) + (i.month() - t.month()),
									r = t.clone().add(n, c),
									o = i - r < 0,
									s = t.clone().add(n + (o ? -1 : 1), c);
								return +(-(n + (i - r) / (o ? r - s : s - r)) || 0)
							},
							a: function(e) {
								return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
							},
							p: function(e) {
								return {
									M: c,
									y: l,
									w: a,
									d: s,
									D: u,
									h: o,
									m: r,
									s: n,
									ms: i,
									Q: d
								} [e] || String(e || "").toLowerCase().replace(/s$/, "")
							},
							u: function(e) {
								return void 0 === e
							}
						},
						v = "en",
						y = {};
					y[v] = m;
					var w = function(e) {
							return e instanceof I
						},
						S = function e(t, i, n) {
							var r;
							if (!t) return v;
							if ("string" == typeof t) {
								var o = t.toLowerCase();
								y[o] && (r = o), i && (y[o] = i, r = o);
								var s = t.split("-");
								if (!r && s.length > 1) return e(s[0])
							} else {
								var a = t.name;
								y[a] = t, r = a
							}
							return !n && r && (v = r), r || !n && v
						},
						E = function(e, t) {
							if (w(e)) return e.clone();
							var i = "object" == typeof t ? t : {};
							return i.date = e, i.args = arguments, new I(i)
						},
						b = _;
					b.l = S, b.i = w, b.w = function(e, t) {
						return E(e, {
							locale: t.$L,
							utc: t.$u,
							x: t.$x,
							$offset: t.$offset
						})
					};
					var I = function() {
							function m(e) {
								this.$L = S(e.locale, null, !0), this.parse(e)
							}
							var f = m.prototype;
							return f.parse = function(e) {
								this.$d = function(e) {
									var t = e.date,
										i = e.utc;
									if (null === t) return new Date(NaN);
									if (b.u(t)) return new Date;
									if (t instanceof Date) return new Date(t);
									if ("string" == typeof t && !/Z$/i.test(t)) {
										var n = t.match(h);
										if (n) {
											var r = n[2] - 1 || 0,
												o = (n[7] || "0").substring(0, 3);
											return i ? new Date(Date.UTC(n[1], r, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, o)) : new Date(n[1], r, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, o)
										}
									}
									return new Date(t)
								}(e), this.$x = e.x || {}, this.init()
							}, f.init = function() {
								var e = this.$d;
								this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
							}, f.$utils = function() {
								return b
							}, f.isValid = function() {
								return !(this.$d.toString() === g)
							}, f.isSame = function(e, t) {
								var i = E(e);
								return this.startOf(t) <= i && i <= this.endOf(t)
							}, f.isAfter = function(e, t) {
								return E(e) < this.startOf(t)
							}, f.isBefore = function(e, t) {
								return this.endOf(t) < E(e)
							}, f.$g = function(e, t, i) {
								return b.u(e) ? this[t] : this.set(i, e)
							}, f.unix = function() {
								return Math.floor(this.valueOf() / 1e3)
							}, f.valueOf = function() {
								return this.$d.getTime()
							}, f.startOf = function(e, t) {
								var i = this,
									d = !!b.u(t) || t,
									g = b.p(e),
									h = function(e, t) {
										var n = b.w(i.$u ? Date.UTC(i.$y, t, e) : new Date(i.$y, t, e), i);
										return d ? n : n.endOf(s)
									},
									p = function(e, t) {
										return b.w(i.toDate()[e].apply(i.toDate("s"), (d ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), i)
									},
									m = this.$W,
									f = this.$M,
									_ = this.$D,
									v = "set" + (this.$u ? "UTC" : "");
								switch (g) {
									case l:
										return d ? h(1, 0) : h(31, 11);
									case c:
										return d ? h(1, f) : h(0, f + 1);
									case a:
										var y = this.$locale().weekStart || 0,
											w = (m < y ? m + 7 : m) - y;
										return h(d ? _ - w : _ + (6 - w), f);
									case s:
									case u:
										return p(v + "Hours", 0);
									case o:
										return p(v + "Minutes", 1);
									case r:
										return p(v + "Seconds", 2);
									case n:
										return p(v + "Milliseconds", 3);
									default:
										return this.clone()
								}
							}, f.endOf = function(e) {
								return this.startOf(e, !1)
							}, f.$set = function(e, t) {
								var a, d = b.p(e),
									g = "set" + (this.$u ? "UTC" : ""),
									h = (a = {}, a[s] = g + "Date", a[u] = g + "Date", a[c] = g + "Month", a[l] = g + "FullYear", a[o] = g + "Hours", a[r] = g + "Minutes", a[n] = g + "Seconds", a[i] = g + "Milliseconds", a)[d],
									p = d === s ? this.$D + (t - this.$W) : t;
								if (d === c || d === l) {
									var m = this.clone().set(u, 1);
									m.$d[h](p), m.init(), this.$d = m.set(u, Math.min(this.$D, m.daysInMonth())).$d
								} else h && this.$d[h](p);
								return this.init(), this
							}, f.set = function(e, t) {
								return this.clone().$set(e, t)
							}, f.get = function(e) {
								return this[b.p(e)]()
							}, f.add = function(i, d) {
								var u, g = this;
								i = Number(i);
								var h = b.p(d),
									p = function(e) {
										var t = E(g);
										return b.w(t.date(t.date() + Math.round(e * i)), g)
									};
								if (h === c) return this.set(c, this.$M + i);
								if (h === l) return this.set(l, this.$y + i);
								if (h === s) return p(1);
								if (h === a) return p(7);
								var m = (u = {}, u[r] = e, u[o] = t, u[n] = 1e3, u)[h] || 1,
									f = this.$d.getTime() + i * m;
								return b.w(f, this)
							}, f.subtract = function(e, t) {
								return this.add(-1 * e, t)
							}, f.format = function(e) {
								var t = this,
									i = this.$locale();
								if (!this.isValid()) return i.invalidDate || g;
								var n = e || "YYYY-MM-DDTHH:mm:ssZ",
									r = b.z(this),
									o = this.$H,
									s = this.$m,
									a = this.$M,
									c = i.weekdays,
									d = i.months,
									l = function(e, i, r, o) {
										return e && (e[i] || e(t, n)) || r[i].slice(0, o)
									},
									u = function(e) {
										return b.s(o % 12 || 12, e, "0")
									},
									h = i.meridiem || function(e, t, i) {
										var n = e < 12 ? "AM" : "PM";
										return i ? n.toLowerCase() : n
									},
									m = {
										YY: String(this.$y).slice(-2),
										YYYY: this.$y,
										M: a + 1,
										MM: b.s(a + 1, 2, "0"),
										MMM: l(i.monthsShort, a, d, 3),
										MMMM: l(d, a),
										D: this.$D,
										DD: b.s(this.$D, 2, "0"),
										d: String(this.$W),
										dd: l(i.weekdaysMin, this.$W, c, 2),
										ddd: l(i.weekdaysShort, this.$W, c, 3),
										dddd: c[this.$W],
										H: String(o),
										HH: b.s(o, 2, "0"),
										h: u(1),
										hh: u(2),
										a: h(o, s, !0),
										A: h(o, s, !1),
										m: String(s),
										mm: b.s(s, 2, "0"),
										s: String(this.$s),
										ss: b.s(this.$s, 2, "0"),
										SSS: b.s(this.$ms, 3, "0"),
										Z: r
									};
								return n.replace(p, (function(e, t) {
									return t || m[e] || r.replace(":", "")
								}))
							}, f.utcOffset = function() {
								return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
							}, f.diff = function(i, u, g) {
								var h, p = b.p(u),
									m = E(i),
									f = (m.utcOffset() - this.utcOffset()) * e,
									_ = this - m,
									v = b.m(this, m);
								return v = (h = {}, h[l] = v / 12, h[c] = v, h[d] = v / 3, h[a] = (_ - f) / 6048e5, h[s] = (_ - f) / 864e5, h[o] = _ / t, h[r] = _ / e, h[n] = _ / 1e3, h)[p] || _, g ? v : b.a(v)
							}, f.daysInMonth = function() {
								return this.endOf(c).$D
							}, f.$locale = function() {
								return y[this.$L]
							}, f.locale = function(e, t) {
								if (!e) return this.$L;
								var i = this.clone(),
									n = S(e, t, !0);
								return n && (i.$L = n), i
							}, f.clone = function() {
								return b.w(this.$d, this)
							}, f.toDate = function() {
								return new Date(this.valueOf())
							}, f.toJSON = function() {
								return this.isValid() ? this.toISOString() : null
							}, f.toISOString = function() {
								return this.$d.toISOString()
							}, f.toString = function() {
								return this.$d.toUTCString()
							}, m
						}(),
						T = I.prototype;
					return E.prototype = T, [
						["$ms", i],
						["$s", n],
						["$m", r],
						["$H", o],
						["$W", s],
						["$M", c],
						["$y", l],
						["$D", u]
					].forEach((function(e) {
						T[e[1]] = function(t) {
							return this.$g(t, e[0], e[1])
						}
					})), E.extend = function(e, t) {
						return e.$i || (e(t, I, E), e.$i = !0), E
					}, E.locale = S, E.isDayjs = w, E.unix = function(e) {
						return E(1e3 * e)
					}, E.en = y[v], E.Ls = y, E.p = {}, E
				}()
			},
			5478: function(e, t, i) {
				"use strict";
				i.r(t);
				var n = function(e, t, i, n) {
						return (e /= n / 2) < 1 ? i / 2 * e * e + t : -i / 2 * (--e * (e - 2) - 1) + t
					},
					r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					o = function() {
						var e = void 0,
							t = void 0,
							i = void 0,
							o = void 0,
							s = void 0,
							a = void 0,
							c = void 0,
							d = void 0,
							l = void 0,
							u = void 0,
							g = void 0,
							h = void 0;

						function p() {
							return window.scrollY || window.pageYOffset
						}

						function m(e) {
							return e.getBoundingClientRect().top + t
						}

						function f(i) {
							l || (l = i), g = s(u = i - l, t, c, d), window.scrollTo(0, g), u < d ? window.requestAnimationFrame(f) : (window.scrollTo(0, t + c), e && a && (e.setAttribute("tabindex", "-1"), e.focus()), "function" == typeof h && h(), l = !1)
						}
						return function(l) {
							var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							switch (d = u.duration || 1e3, o = u.offset || 0, h = u.callback, s = u.easing || n, a = u.a11y || !1, t = p(), void 0 === l ? "undefined" : r(l)) {
								case "number":
									e = void 0, a = !1, i = t + l;
									break;
								case "object":
									i = m(e = l);
									break;
								case "string":
									e = document.querySelector(l), i = m(e)
							}
							switch (c = i - t + o, r(u.duration)) {
								case "number":
									d = u.duration;
									break;
								case "function":
									d = u.duration(c)
							}
							window.requestAnimationFrame(f)
						}
					}();
				t.default = o
			},
			1305: function() {},
			6652: function() {},
			4254: function() {},
			5624: function() {},
			9154: function() {},
			9395: function() {},
			8196: function() {},
			7474: function() {},
			837: function() {},
			4296: function() {},
			3778: function() {},
			6157: function() {},
			9156: function() {},
			69: function() {},
			6942: function() {},
			799: function() {},
			8963: function() {},
			8580: function() {},
			4158: function() {},
			4544: function() {},
			643: function() {},
			7320: function() {},
			2348: function() {},
			6934: function() {},
			2189: function() {},
			8213: function() {},
			8239: function() {},
			4190: function() {},
			6931: function() {},
			9153: function() {},
			5261: function() {},
			3413: function(e, t, i) {
				"use strict";
				const n = i(7312),
					r = i(4527),
					o = i(1666);
				class s {
					constructor() {
						this.tracker = new o.ConflictSupportBannerTracker;
						const e = window.EventAggregationService;
						e && e.subscribeTo(n.AnonymousStudentServiceReady.EventType, this, !0)
					}
					get hasDismissed() {
						if (this.dataStorage) return this.dataStorage.retrieve("conflict_banner_dismissed")
					}
					get dataStorage() {
						var e, t;
						return null !== (t = null === (e = window.Loot) || void 0 === e ? void 0 : e.DataStorage) && void 0 !== t ? t : null
					}
					async init() {
						const e = await this.isUserInAcceptedGeography();
						!this.hasDismissed && e ? (this.showBanner(), this.attachEventListeners()) : this.attachUserInteractionListeners()
					}
					notify(e) {
						this.anonymousStudentService = e.anonymousStudentService
					}
					attachUserInteractionListeners() {
						document.addEventListener("mousemove", (() => {
							this.hideBanner()
						})), document.addEventListener("scroll", (() => {
							this.hideBanner()
						}))
					}
					async isUserInAcceptedGeography() {
						var e, t;
						if (!this.anonymousStudentService) return !1;
						const i = await this.anonymousStudentService.getStudentData([r.StudentField.RESIDENCE_COUNTRY_ID, r.StudentField.NATIONALITY_COUNTRY_ID]),
							n = null !== (t = null !== (e = i.residence_country_id) && void 0 !== e ? e : i.nationality_country_id) && void 0 !== t ? t : 0;
						return !![29, 20, 33, 37, 12, 41, 11, 30, 7].find((e => e === n))
					}
					attachEventListeners() {
						const e = document.querySelector(".js-CloseIcon");
						null == e || e.addEventListener("click", (() => {
							this.closeBanner()
						}));
						const t = document.querySelector(".js-article-link");
						null == t || t.addEventListener("click", (() => {
							this.tracker.trackLinkClick()
						}))
					}
					showBanner() {
						const e = document.querySelector(".js-BannerContainer"),
							t = document.querySelector(".js-Banner");
						null == t || t.classList.remove("Hidden"), null == e || e.classList.add("Background"), this.tracker.trackImpression()
					}
					closeBanner() {
						this.dataStorage && (this.dataStorage.store("conflict_banner_dismissed", !0), this.hideBanner(), this.tracker.trackDismissClick())
					}
					hideBanner() {
						const e = document.querySelector(".js-BannerContainer");
						null == e || e.classList.add("Hidden")
					}
				}
				document.addEventListener("DOMContentLoaded", (() => {
					(new s).init()
				}))
			},
			1666: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.ConflictSupportBannerTracker = void 0, t.ConflictSupportBannerTracker = class {
					trackImpression() {
						window.snowplow && window.snowplow("trackStructEvent", {
							category: "ukraine_banner",
							action: "impression"
						})
					}
					trackDismissClick() {
						window.snowplow && window.snowplow("trackStructEvent", {
							category: "ukraine_banner",
							action: "impression"
						})
					}
					trackLinkClick() {
						window.snowplow && window.snowplow("trackStructEvent", {
							category: "ukraine_banner",
							action: "click"
						})
					}
				}
			},
			7256: function(e, t, i) {
				"use strict";
				const n = i(7312),
					r = i(4527);
				new class {
					constructor() {
						window.EventAggregationService && (window.EventAggregationService.subscribeTo(n.AnonymousStudentServiceReady.EventType, this, !0), window.EventAggregationService.subscribeTo(n.AnonymousStudentProfileUpdated.EventType, this, !1), window.EventAggregationService.subscribeTo(n.AnonymousStudentProfileSynced.EventType, this, !1))
					}
					async notify(e) {
						e.eventType === n.AnonymousStudentServiceReady.EventType && await this.handleAnonymousStudentReadyEvent(e), e.eventType === n.AnonymousStudentProfileUpdated.EventType && await this.handleAnonymousStudentProfileUpdatedEvent(e), e.eventType === n.AnonymousStudentProfileSynced.EventType && await this.handleAnonymousStudentProfileSyncedEvent(e)
					}
					async handleAnonymousStudentReadyEvent(e) {
						this.anonymousStudent = e.anonymousStudentService, await this.updateButton()
					}
					async handleAnonymousStudentProfileUpdatedEvent(e) {
						const t = e.changes;
						(t[r.StudentField.NATIONALITY_COUNTRY_ID] || t[r.StudentField.NATIONALITY_COUNTRY_ISO] || t[r.StudentField.CURRENCY]) && await this.updateButton()
					}
					async handleAnonymousStudentProfileSyncedEvent(e) {
						e.state === n.StudentRepositoryStateType.ONLINE && await this.updateButton()
					}
					async updateButton() {
						const e = await this.anonymousStudent.getStudentData([r.StudentField.NATIONALITY_COUNTRY_ISO, r.StudentField.CURRENCY]);
						this.updateNationalityOnButtons(e), this.updateCurrencyOnButtons(e)
					}
					updateNationalityOnButtons(e) {
						if (void 0 === e[r.StudentField.NATIONALITY_COUNTRY_ISO]) return;
						const t = document.getElementsByClassName("js-locationText");
						for (const i of t) i.textContent = e[r.StudentField.NATIONALITY_COUNTRY_ISO].toUpperCase()
					}
					updateCurrencyOnButtons(e) {
						if (void 0 === e[r.StudentField.CURRENCY]) return;
						const t = document.getElementsByClassName("js-currencyText");
						for (const i of t) i.textContent = e[r.StudentField.CURRENCY].toUpperCase()
					}
				}
			},
			2539: function(e, t, i) {
				"use strict";
				var n = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				};
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const r = n(i(5478));
				class o {
					constructor() {
						this.button = o.getElementById("js-FooterScrollToTopClick"), this.rocket = o.getElementById("js-FooterScrollToTopAnimate")
					}
					static getElementById(e) {
						const t = document.getElementById(e);
						if (!t) throw new Error(`element with id '${e}' was not found`);
						return t
					}
					init() {
						matchMedia("(hover: none)").matches || this.button.classList.add("canHover"), this.button.addEventListener("click", (() => this.scrollUp()))
					}
					scrollUp() {
						const {
							height: e
						} = document.body.getBoundingClientRect(), t = 650 * Math.log(1 + e / 1e3), {
							top: i,
							left: n
						} = this.rocket.getBoundingClientRect();
						this.button.classList.add("FooterRocketLaunch"), this.rocket.style.position = "fixed", this.rocket.style.top = `${i}px`, this.rocket.style.left = `${n}px`;
						let o = i;
						const s = Math.max(Math.log(t / i) / 10, .1),
							a = setInterval((() => this.rocket.style.top = (o -= s) + "px"), 1);
						(0, r.default)(document.body, {
							duration: t,
							callback: () => {
								clearInterval(a), this.button.classList.remove("FooterRocketLaunch"), this.rocket.removeAttribute("style")
							}
						})
					}
				}
				document.addEventListener("DOMContentLoaded", (() => {
					(new o).init()
				}))
			},
			4620: function(e, t, i) {
				"use strict";
				const n = i(1480);
				new class {
					constructor() {
						this.module = document.getElementById("LocalizationSettings"), this.popup = null, this.popupConfig = {
							destroyOnClose: !1,
							cssClassName: "LocalizationSettingsModal",
							onOpen: () => {
								document.dispatchEvent(new CustomEvent("profile_questionnaires_initialize", {
									detail: {
										identifier: "localization_settings"
									}
								}))
							}
						}, document.addEventListener("localization_settings_buttons_rebind", (() => {
							this.bindClickEvents()
						})), this.init()
					}
					init() {
						void 0 === window.ModalManager && (window.ModalManager = new n.ModalManager), this.popup = new n.SimpleModal(this.module, this.popupConfig), this.bindClickEvents(), this.bindOpenLocalizationSettingsEvent()
					}
					bindClickEvents() {
						const e = document.getElementsByClassName("js-showLocalizationPreferences");
						Array.from(e).forEach((e => {
							e.removeEventListener("click", (() => {
								window.ModalManager.open(this.popup)
							})), e.addEventListener("click", (() => {
								window.ModalManager.open(this.popup)
							}))
						}))
					}
					bindOpenLocalizationSettingsEvent() {
						document.addEventListener("open_localization_settings", (() => {
							window.ModalManager.open(this.popup)
						}))
					}
				}
			},
			9516: function(e, t, i) {
				"use strict";
				const n = i(3685),
					r = i(8416),
					o = i(8661),
					s = i(206);
				window.SlideInElementFrameInitiator = class {
					constructor() {
						window.SlideInElementConditionsInformer && window.SlideInElementContextualInformer && window.SlideInElementFramePositioner && window.SlideInElementTracker && (this.conditionsInformer = new n.SlideInElementConditionsInformer(this), this.contextualInformer = new r.SlideInElementContextualInformer(this), this.positioner = new o.SlideInElementFramePositioner(this), this.tracker = new s.SlideInElementTracker(this))
					}
					trigger(e) {
						e && e.dataset && this.conditionsInformer && this.contextualInformer && this.positioner && this.tracker && this.conditionsInformer.areConditionsMet() && this.positioner.positionElement(e)
					}
				}
			},
			1480: function(e, t, i) {
				e.exports = i(9644)("./node_modules/@studyportals/modal/dist/modal.js")
			},
			9644: function(e) {
				"use strict";
				e.exports = modal_v2
			}
		},
		t = {};

	function i(n) {
		var r = t[n];
		if (void 0 !== r) return r.exports;
		var o = t[n] = {
			exports: {}
		};
		return e[n].call(o.exports, o, o.exports, i), o.exports
	}
	i.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return i.d(t, {
			a: t
		}), t
	}, i.d = function(e, t) {
		for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		})
	}, i.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, i.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, i(1368), i(3644), i(266), i(9601), i(1937), i(1347), i(7066), i(723), i(5448), i(1454), i(1483), i(9516), i(8661), i(206), i(3685), i(8416), i(1497), i(2228), i(1657), i(243), i(2032), i(4620), i(8845), i(7256), i(2539), i(3413), i(5261), i(1305), i(8196), i(6934), i(837), i(4190), i(4544), i(2189), i(9154), i(6931), i(7320), i(6652), i(5624), i(9395), i(7474), i(8239), i(8213), i(2348), i(8580), i(4158), i(643), i(9153), i(9156), i(4296), i(6942), i(69), i(799), i(8963), i(3778), i(6157), i(4254)
}();
//# sourceMappingURL=42099b4af021e53fd8fd4e056c2568d7c2e3ffa8.949f0b389755105f24de.js.map