// Rota Belli — Custom Hooks

import { useState, useEffect, useCallback } from 'react';

/**
 * API'den veri çekmek için genel hook
 * @param {Function} fetchFn - API fonksiyonu
 * @param {Array} deps - Bağımlılıklar
 */
export function useFetch(fetchFn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchFn();
      setData(result);
    } catch (err) {
      setError(err.message || 'Bir hata oluştu');
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, loading, error, refetch };
}

/**
 * Hava durumu hook'u
 */
export function useWeather(lat, lon) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!lat || !lon) return;
    setLoading(true);
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=Europe/Istanbul`)
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data) {
          setWeather({
            temp: data.current.temperature_2m,
            humidity: data.current.relative_humidity_2m,
            wind: data.current.wind_speed_10m,
            code: data.current.weather_code,
          });
        }
      })
      .catch(() => setWeather(null))
      .finally(() => setLoading(false));
  }, [lat, lon]);

  return { weather, loading };
}

/**
 * Klavye navigasyon hook'u (erişilebilirlik)
 */
export function useKeyNav(itemCount, onSelect, activeIndex) {
  const handleKeyDown = useCallback((e) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        activeIndex.current = (activeIndex.current + 1) % itemCount;
        break;
      case 'ArrowUp':
        e.preventDefault();
        activeIndex.current = (activeIndex.current - 1 + itemCount) % itemCount;
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (onSelect && activeIndex.current >= 0) {
          onSelect(activeIndex.current);
        }
        break;
      case 'Escape':
        activeIndex.current = -1;
        break;
      default:
        break;
    }
  }, [itemCount, onSelect, activeIndex]);

  return handleKeyDown;
}
