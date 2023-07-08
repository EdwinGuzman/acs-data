// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import census from 'citysdk'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const APIKEY = process.env.CENSUS_API_KEY;
  let cData;

  census(
    {
        vintage: 2017, // required
        geoHierarchy: {
            // required
            county: {
                lat: 28.2639,
                lng: -80.7214,
            },
        },
        sourcePath: ['cbp'], // required
        values: ['ESTAB'], // required
    },
    (err, data) => {
      console.log(data)
    }
  )

  return res.status(200).json({ "name": "false" })
}

// https://api.census.gov/data/2017/acs/acs1?get=NAME,group(B01001)&for=us:1
