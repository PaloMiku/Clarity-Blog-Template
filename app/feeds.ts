import type { FeedGroup } from '~/types/feed'
import { getFavicon, getGhAvatar, getGhIcon, getQqAvatar, QqAvatarSize } from './utils/img'

export default [
	{
		name: '示例友链',
		desc: '',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: '纸鹿',
				sitenick: '摸鱼处',
				title: '纸鹿摸鱼处',// 站点标题
				desc: '纸鹿至麓不知路，支炉制露不止漉。', // 站点描述
				link: 'https://blog.zhilu.site/',
				feed: 'https://blog.zhilu.site/atom.xml',
				icon: getFavicon('blog.zhilu.site'),
				avatar: 'https://blog.zhilu.site/api/avatar.png',
				archs: ['Nuxt', 'Vercel'],
				date: '2024-02-01',
				comment: '纸鹿，Ciarity 作者',
			},
		],
	},
] satisfies FeedGroup[]
