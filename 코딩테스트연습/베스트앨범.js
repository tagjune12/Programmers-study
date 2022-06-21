function solution(genres, plays) {
  const musicInfo = {};
  const musicList = [];
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (!musicInfo[genre]) {
      musicInfo[genre] = {
        info: [{ index: i, play }],
        total: play
      };
    } else {
      musicInfo[genre].info.push({ index: i, play });
      musicInfo[genre].total += play;
    }
  }
  for (const keys in musicInfo) {
    musicList.push(musicInfo[keys]);
  }

  musicList.sort((genreA, genreB) => genreB.total - genreA.total);

  const answer = musicList.reduce((result, music) => {
    if (music.info.length > 1) {
      music.info.sort((musicA, musicB) => {
        if (musicA.play === musicB.play) {
          return musicA.index - musicB.index;
        } else {
          return musicB.play - musicA.play;
        }
      });
      return [...result, music.info[0].index, music.info[1].index];
    } else {
      return [...result, music.info[0].index];
    }

  }, []);

  return answer;
}