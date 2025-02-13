/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import NotFound from './NotFound';
import '../assets/styles/containers/Player.scss';

const Player = ({ history, match, playing, getVideoSource }) => {
  const { id } = match.params;
  const [loading, setLoading] = useState(true);
  const hasPlaying = Object.keys(playing).length > 0;

  useEffect(() => {
    getVideoSource(id);
    setLoading(false);
  }, []);

  const handleBtnBack = () => history.goBack();

  if (loading) {
    return <h2>Cargando...</h2>;
  }
  return hasPlaying ? (
    <div className='player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={handleBtnBack}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

Player.propTypes = {
  getVideoSource: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
