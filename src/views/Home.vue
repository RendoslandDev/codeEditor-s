<template>
	<div>
		<Main />
    <div class="see-more">
    <router-link to="/merchant" class="see-more-link link">
		merchant ⟹🪰 for models in osland creative hub with detail <span class="decoration" aria-hidden="true">—</span>
	</router-link>
      </div>
		<About />
		<Blog />
<div class="see-more">
	<router-link to="/blog" class="see-more-link link">
		read the blog<span class="decoration" aria-hidden="true">—</span>
	</router-link>
</div>
		<Projects />
    <div class="see-more">
	<router-link to="/production" class="see-more-link link">
		see production work ‽ <span class="decoration" aria-hidden="true">—</span>
	</router-link>
   </div>
		<Hobby />
		<Trial />
		<Resume />
    <Contact/>
	</div>
</template>

<script>
import Main from '@/components/Main.vue';
import About from '@/components/About.vue';
import Blog from '@/components/Blog.vue';
import Projects from '@/components/Projects.vue';
import Hobby from '@/components/Hobby.vue';
import Trial from '@/components/Trial.vue';
import Resume from '@/components/Resume.vue';
import Contact from '@/components/Contact.vue';

export default {
	name: 'Home',
	components: {
		Main,
		About,
		Blog,
		Projects,
		Hobby,
		Trial,
		Resume,
    Contact,
	},
};
</script>



<style lang="scss">
  .see-more {
	text-align: center;
	margin: 4rem 0 8rem 0;

	.see-more-link {
		font-size: $step-2;
		color: $rose-gold;
		font-family: "le murmure";

		.decoration {
			position: absolute;
		}
	}
}
</style>