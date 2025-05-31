import React from 'react';

interface FilterPanelProps {
  filters: {
    weight_type?: string;
    license?: string;
    architecture?: string;
    params_max?: number;
  };
  setFilters: (filters: any) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, setFilters }) => {
  return (
    <div className="mt-4 space-y-2 text-sm text-gray-800">
      <div>
        <label>Weight Type:</label>
        <select
          className="w-full border rounded p-1"
          value={filters.weight_type || ''}
          onChange={(e) => setFilters((prev: any) => ({ ...prev, weight_type: e.target.value }))}
        >
          <option value="">Any</option>
          <option value="Open">Open</option>
          <option value="Restricted">Restricted</option>
          <option value="Proprietary">Proprietary</option>
        </select>
      </div>

      <div>
        <label>License:</label>
        <select
          className="w-full border rounded p-1"
          value={filters.license || ''}
          onChange={(e) => setFilters((prev: any) => ({ ...prev, license: e.target.value }))}
        >
          <option value="">Any</option>
          <option value="Apache 2.0">Apache 2.0</option>
          <option value="MIT">MIT</option>
          <option value="OpenRAIL">OpenRAIL</option>
        </select>
      </div>

      <div>
        <label>Architecture:</label>
        <select
          className="w-full border rounded p-1"
          value={filters.architecture || ''}
          onChange={(e) => setFilters((prev: any) => ({ ...prev, architecture: e.target.value }))}
        >
          <option value="">Any</option>
          <option value="Transformer">Transformer</option>
          <option value="Mistral">Mistral</option>
          <option value="Qwen2ForCausalLM">Qwen2ForCausalLM</option>
        </select>
      </div>

      <div>
        <label>Max Parameters (B):</label>
        <input
          type="number"
          className="w-full border rounded p-1"
          placeholder="e.g. 30"
          value={filters.params_max || ''}
          onChange={(e) => setFilters((prev: any) => ({ ...prev, params_max: Number(e.target.value) }))}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
