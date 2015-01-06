<script type="text/javascript">
/* variables wrapped in quotes without JS prefix are for 404 page compat */
var tumblr_page = {
    ask_enabled: {block:AskEnabled}!{/block:AskEnabled}false,
    blog_url: {JSBlogURL},
    description: {JSDescription},
    meta_description: {JSMetaDescription},

    page: {
        is_day: {block:DayPage}!{/block:DayPage}false,
        is_home: {block:DayPage}!{/block:DayPage}{block:PermalinkPage}!{/block:PermalinkPage}{block:SearchPage}!{/block:SearchPage}{block:TagPage}!{/block:TagPage}true,
        is_index: {block:IndexPage}!{/block:IndexPage}false,
        is_permalink: {block:PermalinkPage}!{/block:PermalinkPage}false,
        is_search: {block:SearchPage}!{/block:SearchPage}false,
        is_tag: {block:TagPage}!{/block:TagPage}false,

        {block:TagPage} 
            tag: {
                name: {JSTag},
                name_safe: {JSURLSafeTag},
                url: '{TagURL}',
                url_chrono: '{TagURLChrono}'
            }
        {/block:TagPage} 

        {block:SearchPage}
            search: {
                query: {JSSearchQuery},
                result_count: {SearchResultCount}
            }
        {/block:SearchPage}
    },
            
    pagination: {
        current: {CurrentPage},
        total: {TotalPages},

        {block:Pagination}
            // block:Pagination
            next: '{block:NextPage}{NextPage}{/block:NextPage}',
            previous: '{block:PreviousPage}{PreviousPage}{/block:PreviousPage}'
        {/block:Pagination}

        {block:PermalinkPagination}
            // block:PermalinkPagination
            next: '{block:NextPost}{NextPost}{/block:NextPost}',
            previous: '{block:PreviousPost}{PreviousPost}{/block:PreviousPost}',
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
                tags: [ {block:Tags}
                    {JSTag},
                {/block:Tags} ],
                tags_urls: { {block:Tags}
                    {JSTag}: {
                        url: {JSTagURL},
                        url_chrono: {JSTagURLChrono}
                    },
                {/block:Tags} },
                title: {JSTitle}
            },
        {/block:Text}

        {block:Photo}
        	{
        		caption: {JSCaption},
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
                notes_count: {JSNoteCount},
        	},
        {/block:Photo}

        {block:Panorama}
        	{
        		caption: {JSCaption},
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
        		height: {JSPhotoHeight-Panorama},
        		notes_count: {JSNoteCount},
        		width: {JSPhotoWidth-Panorama}
        	},
        {/block:Panorama}

        {block:Photoset}
        	{
        		count: {JSPhotoCount},
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
                notes_count: {JSNoteCount},
        		photoset: {JSPhotoset}
        	},
        {/block:Photoset}

        {block:Quote}
        	{
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
        		length: {JSLength},
        		notes_count: {JSNoteCount},
        		quote: {JSQuote}
        	},
        {/block:Quote}

        {block:Link}
        	{
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
                notes_count: {JSNoteCount},
        		url: {JSURL}
        	},
        {/block:Link}

        {block:Chat}
        	{
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
        		line: {JSLine},
        		notes_count: {JSNoteCount},
        		title: {JSTitle}
        	},
        {/block:Chat}

        {block:Audio}
        	{
        		caption: {JSCaption},
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
                notes_count: {JSNoteCount},
        		play_count: {JSPlayCount}
        	},
        {/block:Audio}

        {block:Video}
        	{
        		caption: {JSCaption},
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
                notes_count: {JSNoteCount},
        		play_count: {JSPlayCount}
        	},
        {/block:Video}

        {block:Answer}
        	{
        		asker: {JSAsker},
        		asker_portrait: {
        			64: {JSAskerPortraitURL-64},
        			128: {JSAskerPortraitURL-128}
        		},
        		answer: {JSAnswer},
        		answerer_portrait: {
        			64: {JSAnswererPortraitURL-64},
        			128: {JSAnswererPortraitURL-128}
        		},
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
                notes_count: {JSNoteCount},
        		question: {JSQuestion}
        	},
        {/block:Answer}
    {/block:Posts} ],

    rss: {JSRSS},
    submissions_enabled: {block:SubmissionsEnabled}!{block:SubmissionsEnabled}false,
    submit_label: {JSSubmitLabel},
    title: {JSTitle}
}
</script>