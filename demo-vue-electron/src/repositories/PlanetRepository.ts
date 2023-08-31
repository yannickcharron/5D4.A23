import { inject } from 'vue'
import { AxiosStatic } from 'axios'

export class PlanetRepository {
    private axios = inject('axios') as AxiosStatic

    public async retrieveAll() {

        try {
            const res = await this.axios.get('https://api.andromia.science/planets')
            if(res.status === 200) {
                return res.data
            }
        } catch(err) {
            throw err;
        }

    }
}