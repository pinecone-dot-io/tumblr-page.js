<script type="text/javascript">
// variables wrapped in quotes without JS prefix are for 404 page compat
var tumblr_page = {
	ask_enabled: {block:AskEnabled}!{/block:AskEnabled}false,
	blog_url: {JSBlogURL},
	description: {JSDescription},
	meta_description: {JSMetaDescription},

	page: {
		is_day: {block:DayPage}!{/block:DayPage}false,
		is_index: {block:DayPage}!{/block:DayPage}{block:PermalinkPage}!{/block:PermalinkPage}{block:SearchPage}!{/block:SearchPage}{block:TagPage}!{/block:TagPage}true,
		is_permalink: {block:PermalinkPage}!{/block:PermalinkPage}false,
		is_search: {block:SearchPage}!{/block:SearchPage}false,
		is_tag: {block:TagPage}!{/block:TagPage}false,
	},
			
	pagination: {
		{block:Pagination}
			// block:Pagination
			current: {JSCurrentPage},
			next: '{block:NextPage}{NextPage}{/block:NextPage}',
			previous: '{block:PreviousPage}{PreviousPage}{/block:PreviousPage}',
			total: {JSTotalPages}
		{/block:Pagination}

		{block:PermalinkPagination}
			// block:PermalinkPagination
			current: {JSCurrentPage},
			next: '{block:NextPost}{NextPost}{/block:NextPost}',
			previous: '{block:PreviousPost}{PreviousPost}{/block:PreviousPost}',
			total: {JSTotalPages}
		{/block:PermalinkPagination}
	},

	posts: [ {block:Posts}
		{block:Text}
			{
				body: {JSBody},
				date: {
					day_of_month: '{DayOfMonth}',
					day_of_week: '{DayOfWeek}',
					day_of_week_short: '{ShortDayOfWeek}',
					day_of_year: '{DayOfYear}',
					hour_12: '{12Hour}',
					hour_24: '{24Hour}',
					month: '{Month}',
					time_age: '{TimeAgo}',
					time_stamp: '{Timestamp}',
					year: '{Year}'
				},
				id: '{PostID}',	
				notes_count: {JSNoteCount},
				permalink: '{Permalink}',			
				post_notes_url: '{PostNotesURL}', 	
				post_type: {JSPostType},
				short_url: '{ShortURL}',
				title: {JSTitle},
				tags: [ {block:Tags}
					{
						tag: {JSTag},
						url: {JSTagURL},
						url_chrono: {JSTagURLChrono}
					},
				{/block:Tags} ]
			},
		{/block:Text}
	{/block:Posts} ],

	rss: {JSRSS},
	search_query: {JSSearchQuery},
	submissions_enabled: {block:SubmissionsEnabled}!{block:SubmissionsEnabled}false,
	submit_label: {JSSubmitLabel},
	title: {JSTitle}
}
</script>