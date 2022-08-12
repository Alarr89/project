//Summary
function summary_scripts() {
	global $post;
	if( is_a( $post, 'WP_Post' ) && has_shortcode( $post->post_content, 'summary') ) {
		wp_enqueue_style( 'summary', get_template_directory_uri() . '/css/shortcode/summary.css');
	}
}
add_action( 'wp_enqueue_scripts', 'summary_scripts');

function summary_func() {
	ob_start();
	get_template_part('inc/summary-shortcode-template');
	return ob_get_clean();
}
add_shortcode( 'summary', 'summary_func' );