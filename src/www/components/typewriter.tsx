import styles from '../public/styles/landing.module.css';

function Typewriter() {
  return (
    <div className={ styles.container }>
      <div className={ styles.typewriter }>
        <h1>Math.ai</h1>
      </div>
      <div className={ styles.typewriter2 }>
        <p>Let's solve all of your (math) problems.</p>
      </div>
    </div>
  )
}

export default Typewriter;
