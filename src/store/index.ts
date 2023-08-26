import school from './module/school'
import video from './module/video'
import topic from './module/topic'
export function useStore() {
  return {
    school: school(),
    topic: topic(),
    video: video(),
  }
}
