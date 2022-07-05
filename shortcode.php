//Video Shortcode
function video_streamable( $atts ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'video_url' => '',
			'text' => '',
			'button_text' => '',
			'button_link' => '#',
		),
		$atts

	);

	return '
        <div class="vid">
            <div style="width: 100%; height: 0px; position: relative; padding-bottom: 100.000%;">
                <iframe src="'.$atts["video_url"].'" frameborder="0" width="100%" height="100%" allowfullscreen style="width: 100%; height: 100%; position: absolute;"></iframe>
            </div>
            <div class="vid-text">
                '.$atts["text"].'
            </div>
            <a href="'.$atts["button_link"].'" class="vid-button">
                '.$atts["button_text"].'
            </a>
        </div>
	';

}
add_shortcode( 'vid_streamable', 'video_streamable' );

//[vid_streamable video_url="" button_link="" button_text="" text=""]