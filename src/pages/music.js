import React from 'react';
import './index.scss';
import './music.scss';
import Container from '../components/Container';
import { info } from '../components/songs';

const repeat = (len, s) => s.repeat(len);


const musicInfo = ({ location }) => {
  const songInfo = info[location.state.album][location.state.song];
  return (
    <Container>
      <div className="col-xs-12 col-sm-12 col-md-8">
        <div className="section">

          {/* Song name */}
          <div className="col-xs-12 col-sm-12 col-md-8">
            <h1>{location.state.song}</h1>
          </div>

          <iframe title="musica" className="col-xs-12 col-sm-12 col-md-10" height="166" scrolling="no" frameborder="no" allow="autoplay"
            src={songInfo.iframeUrl}>
          </iframe>

          <h2 style={{ padding: `3vh 0` }}>Chords</h2>
          {songInfo.chords.map(si => {
            const cs = si.chords;

            const csdivs = cs.map(cs => (
              <div
                className="chord-info col-xs-12 col-sm-12 col-md-10"
                style={{ rowGap: `45px`, 'gridTemplateColumns': repeat(cs.length, '1fr ') }}>
                {cs.map(chordsPerBar => (
                  <div
                    style={{
                      display: 'grid',
                      width: '100%',
                      gridTemplateColumns: (chordsPerBar instanceof Array)
                        ? repeat(chordsPerBar.length, '1fr ')
                        : `1 fr`
                      }}>
                      {(chordsPerBar instanceof Array)
                        ? chordsPerBar.map(cpb => <div>{cpb}</div>)
                        : chordsPerBar}
                  </div>
                ))}
              </div>
            ));

            return (
              <div style={{ paddingBottom: `20px` }}>
                <h5 style={{ paddingBottom: `10px` }}>{si.section}</h5>
                <div>{csdivs}</div>
              </div>
            );
          })}


          {/* Lyric Sections */}
          {(songInfo.lyrics.length === 0) ? null :
            <div>
              <h2 style={{ padding: `3vh 0` }}>Lyrics</h2>
              <div className="lyrics">
                {songInfo.lyrics.map(l => (
                  <div >{l}</div>
                ))}
              </div>
            </div>
          }


        </div>
      </div>
    </Container>
  );
}

export default musicInfo;
