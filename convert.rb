require 'rubygems'
require 'nokogiri'
require 'json'

results = {
  :parts => []
}

@doc  = Nokogiri::XML(File.read(ARGV[0]))
@doc.css("path").each do |path|
  results[:parts] << {
    :path => path.delete("d"),
    :attrs => path.attributes
  }
end

puts results.to_json

