import React from 'react';
import { Link } from 'gatsby';
import { info } from './songs';

const albums = [
	{
		src: `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1243865296&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`,
		href: `https://soundcloud.com/chrisnevers/sets/untitled-6`,
		title: `untitled 6`,
	},
	{
		src: `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1214756194&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`,
		href: `https://soundcloud.com/chrisnevers/sets/untitled-5`,
		title: `untitled 5`,
	},
	{
		src:
		"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1054434190&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" ,
		href: 'https://soundcloud.com/chrisnevers/sets/untitled-4',
		title: 'untitled 4',
	},
	{
		src:
			'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/952156684&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
		href: 'https://soundcloud.com/chrisnevers/sets/untitled-3',
		title: 'untitled 3',
	},
	{
		src:
			'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/933114799&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
		href: 'https://soundcloud.com/chrisnevers/sets/untitled-2',
		title: 'untitled 2',
	},
	{
		src:
			'https://bandcamp.com/EmbeddedPlayer/album=2458375422/size=small/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/',
		href: 'https://chris-nevers.bandcamp.com/album/untitled',
		title: 'untitled by Chris',
	}
];

export default () => {
	return (
		<div className="section">
			<div className="col-lg-12">
				<h1>Music</h1>
			</div>
			<div className="album-wrapper">
				{albums.map((album, i) => (
					<div
						className="col-xs-12 col-sm-12 col-md-10">
						<iframe
							key={album.title}
							title={album.title}
							src={album.src}
							style={{ border: 0, height: (i === albums.length - 1) ?  '45px' : '350px', width: '100%' }}
							seamless
						>
							<a href={album.href}>{album.title}</a>
						</iframe>
						{(Object.keys(info[album.title] || {}).length === 0) ? null :
							<div>
							<h5 style={{ paddingTop: `2vh` }}>Chords & Lyrics</h5>
							{Object.keys(info[album.title] || {}).map((info, i) => (
								<div>
									<Link to="/music" state={{
											album: album.title,
											song: info
										}}>
										{info}
									</Link>
								</div>
							))}
							</div>
						}
					</div>
				))}
			</div>
		</div>
	);
};
