// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="Currently, I'm working as a software developer in one tech and telecommunication company in Japan. Where we focus on a 4K encoder system featuring support for ultra low latencies."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/kim.jpg" alt="kim photo" />
						<CopyBlock 
							title="Hobby & Free time"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="
							When I'm off the clock, I'm all about my passions: go clycling, capturing the world through my lens, socializing with people, and diving into video game. Occasionally, I rendezvous  with friends, chill out, hit Starbucks, and savor some great drinks together. Plus, I'm also diving into learning Japanese, adding another dimension to my journey."
						/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
						
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Skills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="With over two years of dedicated experience in video codec development, I specialize in advanced encoding, decoding, and transcoding technologies, particularly with H.264 and H.265 codecs. My expertise extends to cutting-edge ultra-low latency solutions and the implementation of robust networking protocols, including RTP, RTSP, UDP, and SRT. I am adept at optimizing video streaming workflows for efficiency and performance, leveraging both software and hardware accelerations to deliver seamless, high-quality media experiences."
						/>
						<BadgesBlock 
							title="Research and Planning" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="Engaged in cutting-edge work with ultra-low latency encoder/decoder devices, we're pushing boundaries with innovative software and hardware chip research."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
						
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'Software Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Encoding/Decodig', 	type: 'fad' },
	{ key: 'window', 			name: 'Video Codec', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Hardware Research', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Ultra Low Latency', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]