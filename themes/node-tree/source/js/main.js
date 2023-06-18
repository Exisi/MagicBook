$(document).ready(function () {
	hljs.initHighlightingOnLoad();
	clickTreeDirectory();
	serachTree();
	pjaxLoad();
	showArticleIndex();
	switchTreeOrIndex();
	scrollToTop();
	pageScroll();
	wrapImageWithFancyBox();
	toggleAll();
});

// 页面滚动
function pageScroll() {
	let start_hight = 0;
	$(window).on("scroll", function () {
		let end_hight = $(window).scrollTop();
		let distance = end_hight - start_hight;
		start_hight = end_hight;
		let $header = $("#header");
		if (distance > 0 && end_hight > 50) {
			return $header.hide();
		}
		if (distance < 0) {
			return $header.show();
		}
		return false;
	});
}

// 回到顶部
function scrollToTop() {
	$("#totop-toggle").on("click", function (e) {
		$("html").animate({ scrollTop: 0 }, 200);
	});
}

// 侧面目录
function switchTreeOrIndex() {
	$("#sidebar-toggle").on("click", function () {
		if ($("#sidebar").hasClass("on")) {
			return scrollOff();
		}
		scrollOn();
	});
	$("body").click(function (e) {
		if (window.matchMedia("(max-width: 1100px)").matches) {
			let target = $(e.target);
			if (target.is("#sidebar *")) {
				return;
			}
			if ($("#sidebar").hasClass("on")) {
				scrollOff();
			}
		}
	});
	if (window.matchMedia("(min-width: 1100px)").matches) {
		return scrollOn();
	}
	scrollOff();
}

//生成文章目录
function showArticleIndex() {
	$(".article-toc").empty();
	$(".article-toc").hide();
	$(".article-toc.active-toc").removeClass("active-toc");
	$("#tree .active").next().addClass("active-toc");

	let labelList = $("#article-content").children();
	let content = "<ul>";

	let max_level = 4;
	let labelLevel = {
		h1: 1,
		h2: 2,
		h3: 3,
		h4: 4,
	};
	let labelMaxLevel = {
		h1: 1 - max_level + 1,
		h2: 2 - max_level + 1,
		h3: 3 - max_level + 1,
		h4: 4 - max_level + 1,
	};

	for (let label of labelList) {
		let level = labelLevel[$(label).prop("tagName").toLowerCase()] || 5;
		if (level < max_level) {
			max_level = level;
		}
	}

	Array.from(labelList).forEach((label, i) => {
		let level = labelMaxLevel[$(label).prop("tagName").toLowerCase()] || 0;
		if (level != 0) {
			$(label).before('<span class="anchor" id="_label' + i + '"></span>');
			content +=
				'<li class="level_' +
				level +
				'"><a href="#_label' +
				i +
				'"> ' +
				$(label).text() +
				"</a></li>";
		}
	});

	content += "</ul>";

	$(".article-toc.active-toc").append(content);

	if (null != $(".article-toc a") && 0 != $(".article-toc a").length) {
		// 点击目录索引链接，动画跳转过去，不是默认闪现过去
		$(".article-toc a").on("click", function (e) {
			e.preventDefault();
			// 获取当前点击的 a 标签，并前触发滚动动画往对应的位置
			let target = $(this.hash);
			$("body, html").animate({ scrollTop: target.offset().top }, 500);
		});

		// 监听浏览器滚动条，当浏览过的标签，给他上色。
		$(window).on("scroll", function (e) {
			let anchorList = $(".anchor");
			anchorList.each(function () {
				let tocLink = $('.article-toc a[href="#' + $(this).attr("id") + '"]');
				let anchorTop = $(this).offset().top;
				let windowTop = $(window).scrollTop();
				if (anchorTop <= windowTop + 100) {
					return tocLink.addClass("read");
				}
				tocLink.removeClass("read");
			});
		});
	}
	$(".article-toc.active-toc").show();
	$(".article-toc.active-toc").children().show();
}

function pjaxLoad() {
	let pjaxOptions = {
		fragment: "#content",
		timeout: 8000,
	};
	$(document).pjax("#menu a", "#content", pjaxOptions);
	$(document).pjax("#tree a", "#content", pjaxOptions);
	$(document).pjax("#index a", "#content", pjaxOptions);
	$(document).on({
		"pjax:complete": function (e) {
			$("pre code").each(function (i, block) {
				hljs.highlightBlock(block);
			});
			// 添加 active
			$("#tree .active").removeClass("active");
			//根据链接路径匹配标题路径
			let full_title = decodeURI(window.location.pathname).slice(1, -1).split("/");
			full_title.splice(0, 3);
			let title = full_title.join("/");
			if (title.length) {
				let searchResult = $("#tree li.file").find("a[title='" + title + "']");
				if (searchResult.length) {
					$(".fa-minus-square-o").removeClass("fa-minus-square-o").addClass("fa-plus-square-o");
					$("#tree ul").css("display", "none");
					if (searchResult.length > 1) {
						let categorie = $("#article-categories span:last a").html();
						if (typeof categorie != "undefined") {
							categorie = categorie.trim();
							searchResult = $("#tree li.directory a:contains('" + categorie + "')")
								.siblings()
								.find("a[title='" + title + "']");
						}
					}
					searchResult[0].parentNode.classList.add("active");
					showActiveTree($("#tree .active"), true);
				}
				if (!searchResult.length) {
					searchResult = $("#tree li.directory ").find("a[title='" + title + "']");
					searchResult[0].classList.add("active");
				}
				showArticleIndex();
			}
			wrapImageWithFancyBox();
		},
	});
}

// 搜索框输入事件
function serachTree() {
	// 解决搜索大小写问题
	jQuery.expr[":"].contains = function (a, i, m) {
		return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
	};

	$("#search-input").on("input", function (e) {
		e.preventDefault();

		// 获取 inpiut 输入框的内容
		let inputContent = e.currentTarget.value;

		// 没值就收起父目录，但是得把 active 的父目录都展开
		if (inputContent.length === 0) {
			$(".fa-minus-square-o").removeClass("fa-minus-square-o").addClass("fa-plus-square-o");
			$("#tree ul").css("display", "none");
			if ($("#tree .active").length) {
				return showActiveTree($("#tree .active"), true);
			}
			return $("#tree").children().css("display", "block");
		}
		// 有值就搜索，并且展开父目录
		$(".fa-plus-square-o").removeClass("fa-plus-square-o").addClass("fa-minus-square-o");
		$("#tree ul").css("display", "none");
		let searchResult = $("#tree li").find("a:contains('" + inputContent + "')");
		if (searchResult.length) {
			showActiveTree(searchResult.parent(), false);
		}
	});

	$("#search-input").on("keyup", function (e) {
		e.preventDefault();
		if (e.keyCode == 13) {
			let inputContent = e.currentTarget.value;
			if (!inputContent.length === 0) {
				window.open(searchEngine + inputContent + "%20site:" + homeHost, "_blank");
			}
		}
	});
}

// 点击目录事件
function clickTreeDirectory() {
	// 判断有 active 的话，就递归循环把它的父目录打开
	let treeActive = $("#tree .active");
	if (treeActive.length) {
		showActiveTree(treeActive, true);
	}

	// 点击目录，就触发折叠动画效果
	$(document).on("click", "#tree a", function (e) {
		showActiveChildren($(this));
	});
}

// 展开子节点
function showActiveChildren(node) {
	let icon = node.parent().find(".fa").first();
	let iconIsOpen = icon.hasClass("fa-minus-square-o");
	let subTree = node.siblings("ul");

	icon.removeClass("fa-minus-square-o").removeClass("fa-plus-square-o");

	if (iconIsOpen) {
		if (typeof subTree != "undefined") {
			subTree.slideUp({ duration: 100 });
		}
		icon.addClass("fa-plus-square-o");
		return;
	}

	if (typeof subTree != "undefined") {
		subTree.slideDown({ duration: 100 });
	}
	icon.addClass("fa-minus-square-o");
}

// 循环递归展开父节点
function showActiveTree(jqNode, isSiblings) {
	if (jqNode.attr("id") === "tree") {
		return;
	}
	if (jqNode.is("ul")) {
		jqNode.css("display", "block");

		// 这个 isSiblings 是给搜索用的
		// true 就显示开同级兄弟节点
		// false 就是给搜索用的，值需要展示它自己就好了，不展示兄弟节点
		if (isSiblings) {
			jqNode.siblings().css("display", "block");
			jqNode.siblings("a").css("display", "inline");
			jqNode
				.siblings("a")
				.find(".fa-plus-square-o")
				.removeClass("fa-plus-square-o")
				.addClass("fa-minus-square-o");
		}
	}

	jqNode.each(function () {
		showActiveTree($(this).parent(), isSiblings);
	});

	if (jqNode.is("a")) {
		//界面初次加载，展开子节点
		showActiveChildren(jqNode);
	}
}

function scrollOn() {
	let $sidebar = $("#sidebar"),
		$content = $("#content"),
		$header = $("#header"),
		$footer = $("#footer"),
		$togglei = $("#sidebar-toggle i");

	$togglei.addClass("fa-close");
	$togglei.removeClass("fa-arrow-right");
	$sidebar.addClass("on");
	$sidebar.removeClass("off");

	if (window.matchMedia("(min-width: 1100px)").matches) {
		$content.addClass("content-on");
		$content.removeClass("content-off");
		$header.addClass("header-on");
		$header.removeClass("off");
		$footer.addClass("header-on");
		$footer.removeClass("off");
	}
}

function scrollOff() {
	let $sidebar = $("#sidebar"),
		$content = $("#content"),
		$header = $("#header"),
		$footer = $("#footer"),
		$togglei = $("#sidebar-toggle i");

	$togglei.addClass("fa-arrow-right");
	$togglei.removeClass("fa-close");
	$sidebar.addClass("off");
	$sidebar.removeClass("on");

	$content.addClass("off");
	$content.removeClass("content-on");
	$header.addClass("off");
	$header.removeClass("header-on");
	$footer.addClass("off");
	$footer.removeClass("header-on");
}

/**
 * Wrap images with fancybox support.
 */
function wrapImageWithFancyBox() {
	$("img")
		.not("#header img")
		.each(function () {
			let $image = $(this);
			let imageCaption = $image.attr("alt");
			let $imageWrapLink = $image.parent("a");

			if ($imageWrapLink.length < 1) {
				let src = this.getAttribute("src");
				let idx = src.lastIndexOf("?");
				if (idx != -1) {
					src = src.substring(0, idx);
				}
				$imageWrapLink = $image.wrap('<a href="' + src + '"></a>').parent("a");
			}

			$imageWrapLink.attr("data-fancybox", "images");
			if (imageCaption) {
				$imageWrapLink.attr("data-caption", imageCaption);
			}
		});

	$('[data-fancybox="images"]').fancybox({
		buttons: ["slideShow", "thumbs", "zoom", "fullScreen", "close"],
		thumbs: {
			autoStart: false,
		},
	});
}

function toggleAll() {
	let treeUls = $("#tree > ul");

	treeUls.each(function () {
		let beforeEl = $('<i class="fa fa-caret-down" aria-hidden="true"></i>');
		beforeEl.css("position", "absolute");
		beforeEl.css("right", "20px");
		beforeEl.css("cursor", "pointer");
		beforeEl.css("color", "#454545");
		beforeEl.hover(
			function () {
				beforeEl.css("color", "rgb(122, 122, 122)");
			},
			function () {
				beforeEl.css("color", "#454545");
			}
		);
		$(this).prepend(beforeEl);

		beforeEl.on("click", function () {
			let branches = $(this).parent().find("a.directory i");

			if ($(this).hasClass("fa-caret-down")) {
				$(this).removeClass("fa-caret-down");
				$(this).addClass("fa-caret-up");

				branches.each(function () {
					if ($(this).hasClass("fa-minus-square-o")) {
						return;
					}
					$(this).click();
				});
				return;
			}

			$(this).removeClass("fa-caret-up");
			$(this).addClass("fa-caret-down");

			branches.each(function () {
				if ($(this).hasClass("fa-plus-square-o")) {
					return;
				}
				$(this).click();
			});
		});
	});
}
