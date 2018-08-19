<template lang="html">
	<div class="header">
		<ul>
			<li v-for="item in preMenu">{{item}}</li>
			<li ref="showBaking" @mouseover="showMoreMenue" @mouseout="hideMoreMenue">
				<i></i>
				<div v-show="showBaking" class="hidemenu">
					<div>烘焙</div>
					<div>妈妈派</div>
				</div>
			</li>
		</ul>
		<div class="rightTopBar">
			<div class="appDownload">
				<img src="../assets/img/11.png" alt="">
				<span>客户端</span>
			</div>
			<div class="signIn">
				<img src="../assets/img/17.png" alt="">
				<span>签到有礼</span>
			</div>
			<div class="publish">
				<img src="../assets/img/16.png" alt="">
				<span>发布</span>
			</div>
			<div class="qqSignIn"></div>
			<div class="signUp"></div>
			<div class="register"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'headermenu',
	data() {
		return {
			menuList: [],
			showBaking: false,
		}
	},
	computed: {
		preMenu() {
			return this.menuList.filter((i,index, arr)=> {
				return index !== arr.length-1 && index !== arr.length-2
			});
		}
	},
	methods: {
		showMoreMenue() {
			this.showBaking = true;
		},
		hideMoreMenue() {
			this.showBaking = false;
		}
	},
	mounted() {
		this.$ajax.get('/getMenuList').then(res=> {
			this.menuList = res.data.list;
		},err=> {
			console.log(err,111);
		});
	}
}
</script>

<style lang="less" scoped>
.header {
	background: #333;
	height: 40px;
	color: #ccc;
	min-width: 990px;
	ul {
		li {
			float: left;
			padding: 0 10px;
			line-height: 40px;
			font-size: 14px;
			font-weight: normal;
			cursor: pointer;
			&:hover {
				background: #000;
				color: #fff;
			}
			i {
				display: block;
				width: 0;
				height: 0;
				border: 4px solid transparent;
				border-top-color: #ccc;
				transform: translateY(-50%) translateX(-50%);
				position: absolute;
				top: 50%;
				left: 50%;
			}
		}
		li:nth-of-type(11) {
			position: relative;
			padding: 0;
			width: 30px;
			height: 40px;
			&:hover {
				i {
					background: #000;
					color: #fff;
					border-top-color: #fff;
				}
				.hidemenu {
					background: #333;
					color: #ccc;
				}
			}
			.hidemenu {
				position: absolute;
				top: 100%;
				right: 0;
				text-align: center;
				background-color: #333;
				div {
					width: 46px;
					padding: 0 10px;
					&:hover {
						background: #000;
						color: #fff;
					}
				}
			}
		}
	}
	.rightTopBar {
		overflow: hidden;
		div {
			float: right;
			height: 40px;
			text-align: center;
			box-sizing: border-box;
		}
		.appDownload, .signIn, .publish {
			width: 60px;
			color: #f1f1f1;
			font-size: 0;
			cursor: pointer;
			&:hover {
				color: #fff;
			}
			img {
				width: 18px;
				height: 18px;
				padding-top: 4px;
				margin: 0 auto;
			}
			span {
				font-size: 10px;
				line-height: 1.5;
			};
		}
		.appDownload {
			background-color: #FE5761;
		}
		.signIn {
			background-color: #FFA859;
		}
		.publish {
			background-color: #59C3D1;
		}
	}
}
</style>
