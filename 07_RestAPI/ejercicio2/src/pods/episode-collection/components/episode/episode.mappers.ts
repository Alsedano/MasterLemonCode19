import * as apiModel from './api/episode.api-model';
import * as viewModel from './episode.vm';

export const mapEpisodeFromApiToVm = (
    episode: apiModel.EpisodeApi
): viewModel.Episode => ({
    id: episode.id,
    name: episode.name,
    air_date: episode.air_date,
    episode: episode.episode,
});
