import React from 'react'
import Link from '../../src/Link'
// import Mui_Dialog from '/pages//materialUi/dialog'
// css
import css from '../styles/base.scss'

export default function index() {
    return (
        <div className={css.example}>
            <h2>Mui_Dialog </h2>
            {/* <Mui_Dialog /> */}
            <Link href='/materialUi/dialog' color='secondary'>
                Go to the Dialog
            </Link>
        </div>
    )
}
