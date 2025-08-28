import SimpleScrollbar from '@/components/SimpleScrollbar'
import Content from './content'

function Scroll() {
  return (
    <div className="card-wrapper p-4 h-full bg-white dark:bg-dark">
      <SimpleScrollbar>
        <Content />
      </SimpleScrollbar>
    </div>
  )
}

export default Scroll
