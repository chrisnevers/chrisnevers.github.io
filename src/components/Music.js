import React from 'react';

const albums = [
  {
    src: 'https://bandcamp.com/EmbeddedPlayer/album=1930773002/size=small/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/',
    href: 'https://chris-nevers.bandcamp.com/album/untitled-3',
    title: 'untitled 3 by Chris'
  },
  {
    src: 'https://bandcamp.com/EmbeddedPlayer/album=477852124/size=small/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/',
    href: 'https://chris-nevers.bandcamp.com/album/untitled-2',
    title: 'untitled 2 by Chris'
  },
  {
    src: 'https://bandcamp.com/EmbeddedPlayer/album=2458375422/size=small/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/',
    href: 'https://chris-nevers.bandcamp.com/album/untitled',
    title: 'untitled by Chris'
  },
];

export default () => {
  return (
    <div className="section row col-xs-12">
      <div className="col-lg-12">
        <h1>Music</h1>
      </div>
      <div className="album-wrapper">
      {albums.map(album =>
        <iframe title={album.title} style={{border: 0, height: '42px', width: '100%' }}
          src={album.src} seamless>
          <a href={album.href}>{album.title}</a>
        </iframe>
      )}
      </div>
    </div>
  );
}
