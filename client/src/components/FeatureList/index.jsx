function Features({ features, handleFeatureChange }) {
    return (
      <div>
        {features.map((feature) => (
          <div key={feature.id} className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id={feature.id}
                name={feature.name}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-webTeal focus:ring-webTeal"
                checked={feature.checked}
                onChange={() => handleFeatureChange(feature)}
              />
            </div>
            <div className="text-sm leading-6">
              <label htmlFor={feature.id} className="font-medium text-gray-900">
                {feature.name}
              </label>
            </div>
          </div>
        ))}
      </div>
    );
  };
  export default Features