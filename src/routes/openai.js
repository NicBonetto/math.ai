import openai from '../utils/openai.js';

async function solve( req, res ) {
  const { data } = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: req.body.prompt,
    temperature: 0
  });

  const { text } = data.choices[ 0 ];

  return res.status( 200 ).json({ text });
}

export default { solve };
