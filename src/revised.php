<?php
 // Template Name: Brands
 get_header();
?>
 <div id="brands-outer">
 <h1>Our brands</h1>
 <h2>Motoring</h2>
 <?php
 // The Query
query_posts( 'cat=3' );
// The Loop
while ( have_posts() ) : the_post(); ?>
<div><a href="<?php the_permalink(); ?>"><?php the_post_thumbnail();?></a>
<a href="<?php the_permalink(); ?>"><div class="title-hover"><div><h1><?php the_title(); ?>
</h1>
<p><?php the_excerpt(); ?></p></div></div></a>
</div>
<?php endwhile;?>
<?php wp_reset_query(); ?>
 <h2>Lifestyle</h2>
 <?php
 // The Query
query_posts( 'cat=6' );
// The Loop
while ( have_posts() ) : the_post(); ?>
<div><a href="<?php the_permalink(); ?>"><?php the_post_thumbnail();?></a>
<a href="<?php the_permalink(); ?>"><div class="title-hover"><div><h1><?php the_title(); ?>
</h1>
<p><?php the_excerpt(); ?></p></div></div></a>
</div>
<?php endwhile;?>
<?php wp_reset_query(); ?>
 </div>

 <section id="brands-text">
 <?php
 if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
 <?php the_content();?>
 <?php endwhile; ?>
 </section>

 <section id="pre-footer-logo"class="wow fadeInUp">
 <img src="<?php bloginfo('template_url');?>/assets/tandem-media-logo.jpg">
 </section>
<?php get_footer(); ?>